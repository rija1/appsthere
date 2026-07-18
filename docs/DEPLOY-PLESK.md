# Déployer AppsThere.com sur Plesk

Guide pas-à-pas pour mettre le site en production sur un serveur Plesk avec
l'extension **Node.js** (Phusion Passenger). Durée : ~30 min la première fois.

> **Rappel d'architecture** : il n'y a **aucune base de données**. L'état vit
> chez Paddle (achats), dans les emails des clients (clés de licence) et dans
> les variables d'environnement (clé privée de signature). Déployer = code +
> variables d'environnement, rien d'autre à provisionner.

## 0. Prérequis

- Plesk Obsidian avec l'extension **Node.js** installée
  (Extensions → catalogue → « Node.js »).
- **Node.js ≥ 20.9** disponible dans Plesk (22 LTS recommandé) —
  vérifiable dans l'écran Node.js du domaine.
- Le domaine `appsthere.com` créé dans Plesk, avec SSL
  (Let's Encrypt via l'extension SSL It!).
- Accès SSH (recommandé pour `npm run build`).

## 1. Déposer le code

Recommandé : l'extension **Git** de Plesk (déploiement en un clic ensuite).

1. Websites & Domains → appsthere.com → **Git** → cloner votre dépôt.
2. Répertoire cible : `/httpdocs` n'est pas obligatoire — utilisez par ex.
   `app` (le code n'a pas besoin d'être dans le docroot ; Passenger sert
   l'application, pas des fichiers).

Sinon : upload SFTP du dossier du projet (sans `node_modules`, sans `.next`).

Dans la suite, `APP_ROOT` = le dossier du projet sur le serveur
(ex. `/var/www/vhosts/appsthere.com/app`).

## 2. Variables d'environnement (avant le build !)

⚠️ **Piège n°1 de Next.js** : les variables `NEXT_PUBLIC_*` sont **figées au
moment du `npm run build`**, pas lues au démarrage. Elles doivent donc exister
*avant* le build. Le plus simple et le plus fiable : un fichier
`.env.production` dans `APP_ROOT` (il est dans `.gitignore`, il ne sera jamais
commité) :

```bash
# APP_ROOT/.env.production — chmod 600
NEXT_PUBLIC_SITE_URL=https://appsthere.com

# Paddle — passer en "production" quand le compte Paddle live est approuvé
NEXT_PUBLIC_PADDLE_ENV=production
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=live_xxxxxxxxxxxxx
NEXT_PUBLIC_PADDLE_PRICE_LUMISO_PRO=pri_xxxxxxxxxxxxx
PADDLE_API_KEY=pdl_live_apikey_xxxxxxxxxxxxx
PADDLE_WEBHOOK_SECRET=pdl_ntfset_xxxxxxxxxxxxx

# Licences — la clé PRIVÉE Ed25519 (jamais dans git, jamais par email)
LICENSE_SIGNING_PRIVATE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx=

# Emails de licence (Resend). Sans cette clé : dry-run dans les logs.
RESEND_API_KEY=re_xxxxxxxxxxxxx
LICENSE_EMAIL_FROM="AppsThere <licenses@appsthere.com>"

# Téléchargement du .dmg notarié
NEXT_PUBLIC_DOWNLOAD_URL_LUMISO=https://downloads.appsthere.com/lumiso-transcribe/LumisoTranscribe-1.0.0.dmg
```

```bash
chmod 600 .env.production
```

Next charge ce fichier **au build et au runtime** : pas besoin de dupliquer
les variables dans l'interface Plesk (vous pouvez quand même en ajouter dans
l'écran Node.js ; celles de Plesk priment au runtime).

> La clé privée de production se génère **une seule fois**, sur une machine
> sûre : `npm run license -- keygen`. La clé *publique* correspondante doit
> être mise dans `LicenseVerifier.production` de l'app Lumiso avant sa
> compilation. Sauvegardez la clé privée dans un gestionnaire de mots de
> passe : la perdre = impossible d'émettre de nouvelles licences.

## 3. Installer et builder

En SSH, dans `APP_ROOT` :

```bash
npm ci               # installe les dépendances exactes du lockfile
npm run build        # build de production (~1 min)
```

> Si le serveur a peu de RAM (< 2 Go) et que le build échoue :
> `NODE_OPTIONS=--max-old-space-size=1536 npm run build`

## 4. Configurer l'application Node.js dans Plesk

Websites & Domains → appsthere.com → **Node.js** :

| Champ | Valeur |
| --- | --- |
| Node.js Version | 22.x (≥ 20.9) |
| Package Manager | npm |
| Document Root | `APP_ROOT/public` |
| Application Root | `APP_ROOT` |
| Application Startup File | `server.js` |
| Application Mode | `production` |

Puis **Enable Node.js** → **Restart App**.

Pourquoi ces valeurs :

- **`server.js`** (à la racine du projet) démarre Next par son API
  programmatique — même chemin de code que `next start`. N'utilisez ni
  `next start` en commande directe (Passenger veut un fichier JS), ni le
  mode `output: standalone` (bug de boucle de redirection `/` → `/` avec
  next-intl dans cette version de Next ; c'est documenté dans `server.js`).
- **Document Root sur `public/`** : Passenger sert le docroot en statique ;
  en le pointant sur `public/`, tout le reste passe par Next (qui sert
  lui-même `.next/static` avec les bons en-têtes de cache immutable).

## 5. Vérifier

```bash
curl -I https://appsthere.com/            # 200, page anglaise
curl -I -H "Accept-Language: fr" https://appsthere.com/   # 307 → /fr
curl -I https://appsthere.com/fr          # 200
curl -I https://appsthere.com/apps/lumiso-transcribe      # 200
curl -I https://appsthere.com/sitemap.xml # 200
curl -s -o /dev/null -w "%{http_code}\n" -X POST \
  https://appsthere.com/api/paddle/webhook  # 401 (signature absente) = OK
```

Au premier démarrage, une ligne `DeprecationWarning: url.parse()` apparaît
dans les logs : **c'est attendu** (motif officiel du serveur custom Next),
sans impact.

## 6. Brancher Paddle en production

1. Compte Paddle (live) → **Developer tools → Notifications** →
   nouvelle destination webhook : `https://appsthere.com/api/paddle/webhook`,
   événement **`transaction.completed`**. Copier le *secret key* dans
   `PADDLE_WEBHOOK_SECRET` (fichier `.env.production`), puis Restart App.
2. **Checkout settings → Website approval** : soumettre le domaine.
   Paddle vérifie la présence des pages légales — elles existent déjà :
   `/legal/terms`, `/legal/privacy`, `/legal/refunds`.
3. Créer le produit *Lumiso Transcribe Pro* + prix one-time 29 USD →
   copier l'ID `pri_…` dans `NEXT_PUBLIC_PADDLE_PRICE_LUMISO_PRO`.
4. **Rebuild obligatoire** après tout changement de variable
   `NEXT_PUBLIC_*` : `npm run build` puis Restart App (voir §7).
5. Test de bout en bout : achat réel à 29 $ avec votre propre carte →
   email de licence reçu → activation dans l'app → remboursement depuis
   le dashboard Paddle.

## 7. Mettre à jour le site (routine)

```bash
cd APP_ROOT
git pull                # ou « Pull now » dans l'écran Git de Plesk
npm ci                  # seulement si package-lock.json a changé
npm run build
touch tmp/restart.txt   # redémarre Passenger sans couper les requêtes en cours
```

(`tmp/restart.txt` : créez le dossier `tmp/` une fois — `mkdir -p tmp` ;
sinon bouton **Restart App** dans Plesk.)

Avec l'extension Git de Plesk, vous pouvez automatiser ces étapes dans
« Deploy actions » :

```bash
npm ci && npm run build && mkdir -p tmp && touch tmp/restart.txt
```

## 8. Dépannage

| Symptôme | Cause probable | Remède |
| --- | --- | --- |
| Boucle de redirection sur `/` | `server.js` remplacé par un handler « simplifié », ou mode standalone réactivé | Restaurer `server.js` du dépôt (le `parse(req.url, true)` est indispensable) |
| Bouton d'achat : « paiement en cours de configuration » | `NEXT_PUBLIC_PADDLE_*` absents **au moment du build** | Compléter `.env.production`, rebuild, restart |
| Webhook Paddle en erreur 500 | `PADDLE_WEBHOOK_SECRET` ou `LICENSE_SIGNING_PRIVATE_KEY` manquants au runtime | Compléter `.env.production`, restart ; Paddle rejoue automatiquement les webhooks échoués |
| Emails de licence non reçus | `RESEND_API_KEY` absent (mode dry-run) | Renseigner la clé ; en attendant, les clés sont dans les logs Plesk (Node.js → Logs) |
| Build tué (OOM) | RAM insuffisante | `NODE_OPTIONS=--max-old-space-size=1536 npm run build` |
| Assets 404 après update | Build pas relancé après `git pull` | `npm run build` + restart |

## Alternative sans extension Node.js

Si l'hébergement Plesk n'a pas l'extension Node.js : PM2 + proxy nginx.

```bash
npm i -g pm2
cd APP_ROOT && PORT=3000 pm2 start server.js --name appsthere
pm2 save && pm2 startup
```

Puis dans Plesk → Apache & nginx Settings du domaine, en « Additional nginx
directives » :

```nginx
location / {
  proxy_pass http://127.0.0.1:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

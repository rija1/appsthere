// Production entry point for Node hosting (Plesk/Passenger, PM2, systemd).
//
// Runs Next.js through its programmatic request handler — the same code
// path as `next start` — so the App Router, API routes and the next-intl
// locale routing all behave identically to `npm start`.
//
// Two hard-won constraints, do not "simplify" them away:
//  - `output: "standalone"` is NOT used: in Next 16.2 its minimal server
//    turns the default-locale rewrite into a "/" → "/" redirect loop.
//  - `handle()` MUST receive the parsed URL as third argument; without it
//    the same redirect loop appears here too. `url.parse()` prints a
//    DEP0169 warning at first request — expected, the handler requires
//    the legacy shape (this mirrors the official custom-server example).
//
// Plain CommonJS: this file is not compiled by Next, keep it free of
// dependencies beyond `next` and Node built-ins.

const { createServer } = require("node:http");
const { parse } = require("node:url");
const next = require("next");

// Passenger does not always set NODE_ENV; default to production.
process.env.NODE_ENV = process.env.NODE_ENV || "production";
const dev = process.env.NODE_ENV !== "production";

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res, parse(req.url, true)).catch((error) => {
        console.error("Request handling failed:", error);
        if (!res.headersSent) res.statusCode = 500;
        res.end("Internal Server Error");
      });
    }).listen(port, hostname, () => {
      console.log(
        `> TheAppsThere ready on http://${hostname}:${port} (${process.env.NODE_ENV})`,
      );
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });

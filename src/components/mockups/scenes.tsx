import {
  AlertTriangle,
  ArrowDownToLine,
  Check,
  CheckCircle2,
  FileAudio,
  FileVideo,
  Gauge,
  Lock,
  MoonStar,
  Play,
  Radio,
  Search,
} from "lucide-react";
import type { MockupScene } from "@/content/types";
import { cn } from "@/lib/utils";
import { MacWindow } from "./mac-window";

/**
 * Hand-drawn "screenshots" of PureScribe, rendered as themed DOM
 * so they stay crisp at any size and adapt to light/dark. Content mirrors
 * the real app: editor with synced highlighting, model manager, exports.
 */

const WAVE_HEIGHTS = [
  38, 62, 45, 80, 55, 90, 40, 70, 58, 85, 47, 66, 52, 78, 42, 88, 60, 50, 74,
  44, 82, 56, 68, 48, 76, 40, 64, 86, 54, 72, 46, 60, 84, 50, 68, 42, 58, 78,
  48, 66,
];

function Waveform({ animate, played = 0.45 }: { animate: boolean; played?: number }) {
  return (
    <div className="flex h-6 flex-1 items-center gap-[2px] overflow-hidden">
      {WAVE_HEIGHTS.map((height, index) => {
        const isPlayed = index / WAVE_HEIGHTS.length < played;
        return (
          <span
            key={index}
            className={cn(
              "w-[3px] shrink-0 rounded-full",
              isPlayed ? "bg-brand" : "bg-border",
              animate && isPlayed && "animate-waveform",
            )}
            style={{
              height: `${height}%`,
              animationDelay: `${(index % 8) * 0.12}s`,
            }}
          />
        );
      })}
    </div>
  );
}

const TRANSCRIPT_ROWS = [
  { time: "11:42", text: "…the interesting part is what happens offline.", active: false },
  { time: "11:48", text: "Everything runs on the machine in front of you —", active: true },
  { time: "11:53", text: "no upload, no queue, no account.", active: false },
  { time: "11:57", text: "You press transcribe and it's just… done.", active: false },
  { time: "12:04", text: "That changes how you treat recordings.", active: false },
];

function EditorScene({ animate }: { animate: boolean }) {
  return (
    <div className="flex aspect-[16/10] text-[10px] leading-normal">
      <aside className="hidden w-[27%] shrink-0 flex-col gap-1 border-r border-border bg-muted/40 p-2.5 sm:flex">
        <p className="px-1.5 pb-1 font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
          Library
        </p>
        {[
          { name: "interview.m4a", meta: "27:31", active: true },
          { name: "standup-monday.mp3", meta: "09:12", active: false },
          { name: "lecture-04.mp4", meta: "48:05", active: false },
          { name: "voicenote 12.wav", meta: "01:47", active: false },
        ].map((file) => (
          <div
            key={file.name}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-1.5 py-1.5",
              file.active ? "bg-brand-soft text-foreground" : "text-muted-foreground",
            )}
          >
            <FileAudio className="size-3 shrink-0" strokeWidth={1.6} />
            <span className="truncate">{file.name}</span>
            <span className="ml-auto font-mono text-[8px]">{file.meta}</span>
          </div>
        ))}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2 border-b border-border px-3 py-2">
          <div className="flex h-5 flex-1 items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 text-muted-foreground">
            <Search className="size-2.5" strokeWidth={1.6} />
            <span className="text-[9px]">Search transcript…</span>
          </div>
          <span className="rounded-md bg-brand px-2 py-1 text-[9px] font-medium text-brand-foreground">
            Export
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-0.5 overflow-hidden p-3">
          {TRANSCRIPT_ROWS.map((row) => (
            <div
              key={row.time}
              className={cn(
                "flex gap-2.5 rounded-md px-2 py-1.5",
                row.active && "border-l-2 border-brand bg-brand-soft",
              )}
            >
              <span className="shrink-0 pt-px font-mono text-[8px] text-muted-foreground">
                {row.time}
              </span>
              <span className={cn(row.active ? "text-foreground" : "text-muted-foreground")}>
                {row.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2.5 border-t border-border px-3 py-2.5">
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
            <Play className="ml-px size-2.5 fill-current" strokeWidth={0} />
          </span>
          <Waveform animate={animate} />
          <span className="shrink-0 font-mono text-[8px] text-muted-foreground">
            12:04 / 27:31
          </span>
        </div>
      </div>
    </div>
  );
}

const MODEL_ROWS = [
  { name: "Tiny", size: "78 MB", state: "installed", pro: false },
  { name: "Base", size: "148 MB", state: "installed", pro: false },
  { name: "Small", size: "488 MB", state: "downloading", pro: false },
  { name: "Medium", size: "1.5 GB", state: "get", pro: false },
  { name: "Turbo", size: "1.6 GB", state: "get", pro: true },
  { name: "Large", size: "3.1 GB", state: "get", pro: true },
] as const;

function RatingDots({ filled }: { filled: number }) {
  return (
    <span className="flex gap-[3px]">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={cn(
            "size-[5px] rounded-full",
            index < filled ? "bg-brand" : "bg-border",
          )}
        />
      ))}
    </span>
  );
}

function ModelsScene() {
  return (
    <div className="aspect-[16/10] p-4 text-[10px]">
      <p className="pb-1 text-[13px] font-semibold tracking-tight">Whisper models</p>
      <p className="pb-3 text-[9px] text-muted-foreground">
        Downloads are verified with SHA-256 before install.
      </p>
      <div className="flex flex-col gap-1">
        {MODEL_ROWS.map((model, index) => (
          <div
            key={model.name}
            className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-2.5 py-[7px]"
          >
            <span className="w-14 font-medium">
              {model.name}
              {model.pro && (
                <span className="ml-1.5 rounded-full bg-brand-soft px-1.5 py-px font-mono text-[7px] font-semibold uppercase tracking-wide text-brand">
                  Pro
                </span>
              )}
            </span>
            <span className="hidden w-12 font-mono text-[8px] text-muted-foreground sm:block">
              {model.size}
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <RatingDots filled={5 - index} />
            </span>
            <span className="ml-auto flex items-center">
              {model.state === "installed" && (
                <span className="flex items-center gap-1 text-[9px] text-muted-foreground">
                  <Check className="size-2.5 text-brand" strokeWidth={2.4} /> Installed
                </span>
              )}
              {model.state === "downloading" && (
                <span className="flex w-20 items-center gap-1.5">
                  <span className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                    <span className="block h-full w-[64%] rounded-full bg-brand" />
                  </span>
                  <span className="font-mono text-[8px] text-muted-foreground">64%</span>
                </span>
              )}
              {model.state === "get" && (
                <span className="rounded-md border border-border px-2 py-0.5 text-[9px] font-medium">
                  Get
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const EXPORT_FORMATS = [
  { name: "Plain text", ext: ".txt", selected: false },
  { name: "Markdown", ext: ".md", selected: false },
  { name: "SubRip subtitles", ext: ".srt", selected: true },
  { name: "WebVTT subtitles", ext: ".vtt", selected: false },
  { name: "JSON", ext: ".json", selected: false },
];

function ExportScene() {
  return (
    <div className="flex aspect-[16/10] items-center justify-center bg-muted/30 p-5 text-[10px]">
      <div className="w-full max-w-64 rounded-xl border border-border bg-card p-3.5 shadow-[0_16px_32px_-16px_var(--shadow-color)]">
        <p className="pb-0.5 text-[12px] font-semibold tracking-tight">Export transcript</p>
        <p className="pb-2.5 text-[9px] text-muted-foreground">interview.m4a · 27:31</p>
        <div className="flex flex-col gap-1">
          {EXPORT_FORMATS.map((format) => (
            <div
              key={format.ext}
              className={cn(
                "flex items-center gap-2 rounded-md border px-2 py-1.5",
                format.selected
                  ? "border-brand/40 bg-brand-soft"
                  : "border-border",
              )}
            >
              <span
                className={cn(
                  "flex size-2.5 items-center justify-center rounded-full border",
                  format.selected ? "border-brand" : "border-border",
                )}
              >
                {format.selected && <span className="size-1.5 rounded-full bg-brand" />}
              </span>
              <span className={format.selected ? "font-medium" : "text-muted-foreground"}>
                {format.name}
              </span>
              <span className="ml-auto font-mono text-[8px] text-muted-foreground">
                {format.ext}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-1.5 pt-3">
          <span className="rounded-md border border-border px-2.5 py-1 text-[9px]">Cancel</span>
          <span className="rounded-md bg-brand px-2.5 py-1 text-[9px] font-medium text-brand-foreground">
            Export…
          </span>
        </div>
      </div>
    </div>
  );
}

function DropzoneScene() {
  return (
    <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 p-6 text-[10px]">
      <div className="flex w-full max-w-72 flex-col items-center gap-2.5 rounded-xl border-2 border-dashed border-border py-8">
        <span className="flex size-9 items-center justify-center rounded-full bg-brand-soft text-brand">
          <ArrowDownToLine className="size-4" strokeWidth={1.8} />
        </span>
        <p className="text-[12px] font-medium tracking-tight">Drop audio or video</p>
        <div className="flex flex-wrap justify-center gap-1 px-4">
          {["MP3", "WAV", "M4A", "AAC", "FLAC", "MP4", "MOV"].map((ext) => (
            <span
              key={ext}
              className="rounded-full border border-border px-1.5 py-px font-mono text-[7px] text-muted-foreground"
            >
              {ext}
            </span>
          ))}
        </div>
      </div>
      <div className="flex w-full max-w-72 items-center gap-2 rounded-lg border border-border bg-muted/40 px-2.5 py-2">
        <FileVideo className="size-3.5 text-muted-foreground" strokeWidth={1.6} />
        <span className="truncate">lecture-04.mp4</span>
        <span className="ml-auto rounded-full bg-brand-soft px-1.5 py-px font-mono text-[7px] font-medium uppercase tracking-wide text-brand">
          Queued
        </span>
      </div>
    </div>
  );
}

/**
 * Stagebox Remote. Channel strips mirror the real app: number, +48V, meter
 * with peak-hold line, gain readout, HPF. The four unlocked strips are the
 * free tier; the rest carry the lock overlay, meters still running.
 */
const CHANNELS = [
  { n: 1, gain: "+34dB", level: 0.0, peak: 0.06, p48: true, unlocked: true },
  { n: 2, gain: "+24dB", level: 0.62, peak: 0.78, p48: false, unlocked: true },
  { n: 3, gain: "+45dB", level: 0.41, peak: 0.55, p48: true, unlocked: true },
  { n: 4, gain: "−6dB", level: 0.08, peak: 0.12, p48: false, unlocked: true },
  { n: 5, gain: "+24dB", level: 0.71, peak: 0.88, p48: false, unlocked: false },
  { n: 6, gain: "+12dB", level: 0.34, peak: 0.47, p48: false, unlocked: false },
];

function ChannelMeter({ level, peak }: { level: number; peak: number }) {
  // Green up to 65 %, yellow to 85 %, red above — the app's own thresholds.
  const green = Math.min(level, 0.65);
  const yellow = Math.max(0, Math.min(level, 0.85) - 0.65);
  const red = Math.max(0, level - 0.85);
  return (
    <div className="relative h-16 w-3 overflow-hidden rounded-[3px] bg-foreground/85">
      <div className="absolute inset-x-px bottom-px flex flex-col-reverse">
        <span className="w-full bg-emerald-400" style={{ height: `${green * 100}%` }} />
        <span className="w-full bg-amber-400" style={{ height: `${yellow * 100}%` }} />
        <span className="w-full bg-red-500" style={{ height: `${red * 100}%` }} />
      </div>
      {peak > 0.02 && (
        <span
          className="absolute inset-x-px h-[1.5px] bg-white"
          style={{ bottom: `${peak * 100}%` }}
        />
      )}
    </div>
  );
}

function ConsoleScene({ animate }: { animate: boolean }) {
  return (
    <div className="aspect-[16/10] bg-muted/30 p-3 text-[10px]">
      <div className="flex items-center gap-2 pb-2.5">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        <div className="leading-tight">
          <p className="text-[10px] font-semibold tracking-tight">Y001 · Tio1608-D2</p>
          <p className="text-[8px] text-muted-foreground">192.168.3.105 · 16 inputs</p>
        </div>
        <span
          className={cn(
            "ml-auto rounded-md px-1.5 py-0.5 font-mono text-[7px] font-semibold uppercase tracking-wide",
            animate
              ? "bg-brand text-brand-foreground"
              : "border border-border text-muted-foreground",
          )}
        >
          Peak
        </span>
        <span className="rounded-md px-1.5 py-0.5 font-mono text-[7px] font-semibold uppercase tracking-wide text-red-500">
          +48V
        </span>
      </div>

      <div className="grid grid-cols-6 gap-1.5">
        {CHANNELS.map((channel) => (
          <div
            key={channel.n}
            className="relative flex flex-col items-center gap-1 rounded-lg border border-border bg-card px-1 py-1.5"
          >
            <span className="text-[9px] font-bold">{channel.n}</span>
            <span
              className={cn(
                "w-full rounded-[3px] py-px text-center font-mono text-[6px] font-bold",
                channel.p48
                  ? "bg-red-500 text-white"
                  : "bg-muted text-muted-foreground",
              )}
            >
              +48V
            </span>
            <ChannelMeter level={channel.level} peak={channel.peak} />
            <span className="w-full rounded-[3px] bg-foreground/85 py-px text-center font-mono text-[6.5px] font-bold text-emerald-400">
              {channel.gain}
            </span>
            <span className="w-full rounded-[3px] bg-muted py-px text-center font-mono text-[6px] text-muted-foreground">
              HPF
            </span>
            {!channel.unlocked && (
              <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-card/75">
                <Lock className="size-3 text-muted-foreground" strokeWidth={1.8} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const UNITS = [
  { name: "Y001 · Tio1608-D2", meta: "192.168.3.105 · 16 inputs", state: "online" },
  { name: "Y002 · Tio1608-D2", meta: "192.168.3.106 · 16 inputs", state: "online" },
  { name: "Y007 · Rio3224-D2", meta: "192.168.3.112 · 32 inputs", state: "online" },
  { name: "Y009 · Tio1608-D2", meta: "reconnecting…", state: "offline" },
];

function UnitsScene() {
  return (
    <div className="flex aspect-[16/10] flex-col gap-1.5 bg-muted/30 p-4 text-[10px]">
      <p className="pb-0.5 font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
        Units found
      </p>
      {UNITS.map((unit) => (
        <div
          key={unit.name}
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-2"
        >
          <span
            className={cn(
              "size-1.5 shrink-0 rounded-full",
              unit.state === "online" ? "bg-emerald-500" : "bg-amber-400",
            )}
          />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[9.5px] font-semibold tracking-tight">{unit.name}</p>
            <p className="truncate text-[8px] text-muted-foreground">{unit.meta}</p>
          </div>
          {unit.state === "online" && (
            <Radio className="ml-auto size-3 shrink-0 text-brand" strokeWidth={1.8} />
          )}
        </div>
      ))}
    </div>
  );
}

/* Pilote — flights and recency, mirroring the app's Logbook and Totals tabs. */

type LogbookRow =
  | { kind: "month"; label: string; total: string }
  | {
      kind: "flight";
      date: string;
      route: string;
      aircraft: string;
      total: string;
      night?: string;
      sim?: boolean;
    };

const LOGBOOK_ROWS: LogbookRow[] = [
  { kind: "month", label: "August 2026", total: "3.0" },
  { kind: "flight", date: "11 Aug", route: "KPAO → KHAF", aircraft: "N172SP · C172", total: "0.9" },
  { kind: "flight", date: "11 Aug", route: "KHAF → KPAO", aircraft: "N172SP · C172", total: "0.8" },
  { kind: "flight", date: "5 Aug", route: "KPAO → KPAO", aircraft: "N172SP · C172", total: "1.2" },
  { kind: "month", label: "July 2026", total: "7.7" },
  { kind: "flight", date: "31 Jul", route: "KPAO → KMRY", aircraft: "N301PA · PA44", total: "2.2" },
  {
    kind: "flight",
    date: "31 Jul",
    route: "KMRY → KPAO",
    aircraft: "N301PA · PA44",
    total: "2.1",
    night: "0.8",
  },
  {
    kind: "flight",
    date: "22 Jul",
    route: "KPAO → KPAO",
    aircraft: "SIM-FMX · PA44",
    total: "1.5",
    sim: true,
  },
  { kind: "flight", date: "14 Jul", route: "KSBA → KPAO", aircraft: "N172SP · C172", total: "1.7" },
];

function LogbookScene() {
  return (
    <div className="flex aspect-[16/10] flex-col gap-1 bg-muted/30 p-4 text-[10px]">
      {LOGBOOK_ROWS.map((row) =>
        row.kind === "month" ? (
          <div
            key={row.label}
            className="flex items-baseline justify-between px-0.5 pb-0.5 pt-1 first:pt-0"
          >
            <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
              {row.label}
            </p>
            <p className="font-mono text-[9px] font-semibold tabular-nums text-muted-foreground">
              {row.total}
            </p>
          </div>
        ) : (
          <div
            key={`${row.date}-${row.route}`}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-1.5"
          >
            <span className="w-9 shrink-0 font-mono text-[8px] text-muted-foreground">
              {row.date}
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[9.5px] font-semibold tracking-tight">{row.route}</p>
              <p className="truncate text-[8px] text-muted-foreground">{row.aircraft}</p>
            </div>
            <div className="ml-auto flex shrink-0 items-center gap-2">
              {row.night && (
                <span className="flex items-center gap-0.5 text-[8px] text-muted-foreground">
                  <MoonStar className="size-2.5" strokeWidth={1.8} />
                  {row.night}
                </span>
              )}
              <span className="text-right leading-tight">
                <span
                  className={cn(
                    "block font-mono text-[10px] font-semibold tabular-nums",
                    row.sim && "text-muted-foreground",
                  )}
                >
                  {row.total}
                </span>
                {row.sim && (
                  <span className="block font-mono text-[7px] uppercase text-muted-foreground/70">
                    sim
                  </span>
                )}
              </span>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

const RECENCY = [
  {
    title: "Carrying passengers · SEL",
    detail: "4 takeoffs and 4 landings in the last 90 days",
    rule: "14 CFR § 61.57(a)",
    state: "ok",
  },
  {
    title: "Instrument currency",
    detail: "4 of 6 approaches in 6 months · holding missing",
    rule: "14 CFR § 61.57(c)",
    state: "bad",
  },
  {
    title: "Night passengers · SEL",
    detail: "1 of 3 night takeoffs · 1 of 3 full-stop landings",
    rule: "14 CFR § 61.57(b)",
    state: "bad",
  },
  {
    title: "Flight review",
    detail: "Last review Jun 29, 2026",
    rule: "Expires Jun 30, 2028",
    state: "ok",
  },
  {
    title: "Medical certificate",
    detail: "Expires in 3 weeks",
    rule: "Sep 4, 2026",
    state: "warn",
  },
];

function RecencyScene() {
  return (
    <div className="flex aspect-[16/10] flex-col gap-1.5 bg-muted/30 p-4 text-[10px]">
      <p className="pb-0.5 font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
        Recency
      </p>
      {RECENCY.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-2 rounded-lg border border-border bg-card px-2.5 py-2"
        >
          {item.state === "ok" && (
            <CheckCircle2 className="mt-px size-3 shrink-0 text-emerald-500" strokeWidth={2} />
          )}
          {item.state === "warn" && (
            <AlertTriangle className="mt-px size-3 shrink-0 text-amber-500" strokeWidth={2} />
          )}
          {item.state === "bad" && (
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-rose-500" />
          )}
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[9.5px] font-semibold tracking-tight">{item.title}</p>
            <p className="truncate text-[8px] text-muted-foreground">{item.detail}</p>
            <p className="truncate font-mono text-[7.5px] text-muted-foreground/70">
              {item.rule}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* Serviced — the due-dates dashboard and the asset list, mirroring the app's
   Due and Assets tabs. Demo data only. */

const DUE_ROWS = [
  { section: "Overdue", items: [
    { asset: "Beneteau Oceanis 34", task: "Impeller — raw water pump", when: "12 days overdue", state: "bad", counter: "412 h" },
  ]},
  { section: "This month", items: [
    { asset: "Honda CR-V", task: "Oil & filter", when: "in 9 days · or 1,240 km", state: "warn", counter: "82,760 km" },
    { asset: "Maple Street house", task: "Furnace filter", when: "in 16 days", state: "warn" },
  ]},
  { section: "Upcoming", items: [
    { asset: "Kubota BX2380", task: "Hydraulic fluid", when: "≈ Oct 3 · 50 h left", state: "ok", counter: "198 h" },
    { asset: "Maple Street house", task: "Gutter cleaning", when: "in 2 months", state: "ok" },
    { asset: "Honda CR-V", task: "Brake fluid", when: "in 5 months", state: "ok" },
  ]},
] as const;

function DueboardScene() {
  return (
    <div className="flex aspect-[16/10] flex-col gap-1 bg-muted/30 p-4 text-[10px]">
      {DUE_ROWS.map((group) => (
        <div key={group.section} className="contents">
          <p className="px-0.5 pb-0.5 pt-1 font-mono text-[8px] uppercase tracking-widest text-muted-foreground first:pt-0">
            {group.section}
          </p>
          {group.items.map((item) => (
            <div
              key={item.task + item.asset}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-1.5"
            >
              {item.state === "ok" && (
                <CheckCircle2 className="size-3 shrink-0 text-emerald-500" strokeWidth={2} />
              )}
              {item.state === "warn" && (
                <AlertTriangle className="size-3 shrink-0 text-amber-500" strokeWidth={2} />
              )}
              {item.state === "bad" && (
                <span className="ml-0.5 mr-0.5 size-1.5 shrink-0 rounded-full bg-rose-500" />
              )}
              <div className="min-w-0 leading-tight">
                <p className="truncate text-[9.5px] font-semibold tracking-tight">{item.task}</p>
                <p className="truncate text-[8px] text-muted-foreground">{item.asset}</p>
              </div>
              <div className="ml-auto shrink-0 text-right leading-tight">
                <p className="font-mono text-[8.5px] font-semibold tabular-nums">{item.when}</p>
                {"counter" in item && item.counter && (
                  <p className="flex items-center justify-end gap-0.5 font-mono text-[7.5px] text-muted-foreground/70">
                    <Gauge className="size-2.5" strokeWidth={1.8} />
                    {item.counter}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const ASSETS = [
  { name: "Maple Street house", kind: "Home · 1998", due: 2, overdue: 0 },
  { name: "Honda CR-V", kind: "Car · 2019 · 82,760 km", due: 1, overdue: 0 },
  { name: "Beneteau Oceanis 34", kind: "Boat · 2011 · 412 h", due: 0, overdue: 1 },
  { name: "Kubota BX2380", kind: "Equipment · 2021 · 198 h", due: 1, overdue: 0 },
  { name: "Airstream Flying Cloud", kind: "RV · 2016 · 41,300 km", due: 0, overdue: 0 },
];

function UpkeepScene() {
  return (
    <div className="flex aspect-[16/10] flex-col gap-1.5 bg-muted/30 p-4 text-[10px]">
      <p className="pb-0.5 font-mono text-[8px] uppercase tracking-widest text-muted-foreground">
        Assets
      </p>
      {ASSETS.map((a) => (
        <div
          key={a.name}
          className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-2.5 py-2"
        >
          <span className="size-6 shrink-0 rounded-md bg-brand-soft" />
          <div className="min-w-0 leading-tight">
            <p className="truncate text-[9.5px] font-semibold tracking-tight">{a.name}</p>
            <p className="truncate text-[8px] text-muted-foreground">{a.kind}</p>
          </div>
          <div className="ml-auto flex shrink-0 items-center gap-1">
            {a.overdue > 0 && (
              <span className="rounded-full bg-rose-500/15 px-1.5 py-px font-mono text-[7.5px] font-semibold text-rose-600">
                {a.overdue} overdue
              </span>
            )}
            {a.due > 0 && (
              <span className="rounded-full bg-amber-500/15 px-1.5 py-px font-mono text-[7.5px] font-semibold text-amber-700">
                {a.due} due
              </span>
            )}
            {a.due === 0 && a.overdue === 0 && (
              <CheckCircle2 className="size-3 text-emerald-500" strokeWidth={2} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const SCENE_TITLES: Record<MockupScene, string> = {
  editor: "PureScribe — interview.m4a",
  models: "PureScribe — Models",
  export: "PureScribe — Export",
  dropzone: "PureScribe",
  console: "Stagebox Remote — Y001 · Tio1608-D2",
  units: "Stagebox Remote — Units",
  logbook: "Pilote — Logbook",
  recency: "Pilote — Totals",
  dueboard: "Serviced — Due",
  upkeep: "Serviced — Assets",
};

/** A full app window rendering the requested scene. */
export function AppMockup({
  scene,
  animate = false,
  className,
}: {
  scene: MockupScene;
  /** Animate the waveform — reserve for the single hero instance. */
  animate?: boolean;
  className?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none", className)}>
      <MacWindow title={SCENE_TITLES[scene]}>
        {scene === "editor" && <EditorScene animate={animate} />}
        {scene === "models" && <ModelsScene />}
        {scene === "export" && <ExportScene />}
        {scene === "dropzone" && <DropzoneScene />}
        {scene === "console" && <ConsoleScene animate={animate} />}
        {scene === "units" && <UnitsScene />}
        {scene === "logbook" && <LogbookScene />}
        {scene === "recency" && <RecencyScene />}
        {scene === "dueboard" && <DueboardScene />}
        {scene === "upkeep" && <UpkeepScene />}
      </MacWindow>
    </div>
  );
}

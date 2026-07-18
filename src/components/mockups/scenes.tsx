import {
  ArrowDownToLine,
  Check,
  FileAudio,
  FileVideo,
  Play,
  Search,
} from "lucide-react";
import type { MockupScene } from "@/content/types";
import { cn } from "@/lib/utils";
import { MacWindow } from "./mac-window";

/**
 * Hand-drawn "screenshots" of Lumiso Transcribe, rendered as themed DOM
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

const SCENE_TITLES: Record<MockupScene, string> = {
  editor: "Lumiso Transcribe — interview.m4a",
  models: "Lumiso Transcribe — Models",
  export: "Lumiso Transcribe — Export",
  dropzone: "Lumiso Transcribe",
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
      </MacWindow>
    </div>
  );
}

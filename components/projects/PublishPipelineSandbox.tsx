"use client";

// Simplified demo of the publish pipeline behind the real CMS — not an
// embed of it. No real GitHub OAuth handshake or API write happens here;
// this replays the actual sequence of steps a real publish goes through,
// at demo speed.
//
// Known, honest limitation: "Cloudflare Function" and "Git commit" are
// illustrative stages, not live calls — there's no safe way to demo a real
// OAuth handshake and a real git write inside a public sandboxed widget.

import { useEffect, useRef, useState } from "react";

const stages = [
  "Draft saved",
  "GitHub OAuth",
  "Cloudflare Function",
  "Git commit",
  "Auto-rebuild",
  "Live",
];

const STEP_DELAY_MS = 450;

export default function PublishPipelineSandbox() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [running, setRunning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function runPipeline() {
    if (running) return;
    setRunning(true);
    setActiveIndex(0);

    let i = 0;
    const step = () => {
      i += 1;
      if (i < stages.length) {
        setActiveIndex(i);
        timeoutRef.current = setTimeout(step, STEP_DELAY_MS);
      } else {
        setRunning(false);
      }
    };
    timeoutRef.current = setTimeout(step, STEP_DELAY_MS);
  }

  return (
    <div className="rounded-lg border border-border bg-bg/40 p-5">
      <div className="flex items-center justify-between mb-4 gap-3">
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-text-faint">
          Publish a post
        </p>
        <button
          type="button"
          onClick={runPipeline}
          disabled={running}
          className="shrink-0 text-[10px] uppercase tracking-widest2 rounded border border-border px-2.5 py-1 text-text-muted hover:border-accent-teal/50 hover:text-accent-teal transition-colors disabled:opacity-40"
        >
          {running ? "Publishing…" : "Publish"}
        </button>
      </div>

      <div className="space-y-1.5">
        {stages.map((stage, i) => {
          const isDone = activeIndex >= 0 && i < activeIndex;
          const isFinal = !running && activeIndex === stages.length - 1;
          const isActive = i === activeIndex;
          const settled = isDone || (isFinal && i <= activeIndex);

          return (
            <div
              key={stage}
              className={`flex items-center gap-2.5 rounded-md border px-3 py-2 text-xs transition-colors ${
                isActive
                  ? "border-accent-teal/60 bg-surface text-accent-teal"
                  : settled
                  ? "border-border/70 bg-surface text-text-muted"
                  : "border-border/40 text-text-faint"
              }`}
            >
              <span className="font-mono text-[10px] w-4 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{stage}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

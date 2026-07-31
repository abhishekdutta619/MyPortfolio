"use client";

import { useState } from "react";

const layers = [
  {
    id: "client",
    label: "Client",
    detail:
      "React + TypeScript SPA. Holds board state locally with optimistic updates, then reconciles with the server on response.",
  },
  {
    id: "api",
    label: "API",
    detail:
      "NestJS REST API. Validates requests, owns business logic (column limits, permissions), and coordinates between the two data stores.",
  },
  {
    id: "db",
    label: "Data",
    detail:
      "PostgreSQL for structured data — boards, users, permissions. MongoDB for flexible, high-write activity/audit logs.",
  },
];

export default function ArchitectureDiagram() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-lg border border-border bg-bg/40 p-5">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-text-faint mb-4">
        Architecture — hover or tab through a layer
      </p>
      <div className="flex items-center gap-2">
        {layers.map((layer, i) => (
          <div key={layer.id} className="flex items-center gap-2 flex-1">
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`w-full rounded-md border px-3 py-4 text-center text-sm transition-colors ${
                active === i
                  ? "border-accent-teal text-accent-teal bg-accent-teal/10"
                  : "border-border text-text-muted hover:border-accent-teal/50"
              }`}
            >
              {layer.label}
            </button>
            {i < layers.length - 1 && (
              <span className="text-text-faint text-xs shrink-0" aria-hidden>
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-text-muted leading-relaxed min-h-[2.5rem]">
        {layers[active].detail}
      </p>
    </div>
  );
}

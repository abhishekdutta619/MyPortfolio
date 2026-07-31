"use client";

// Simplified demo of the state-management pattern behind the real product —
// not an embed of it. Uses native HTML5 drag-and-drop (mouse/touch only).
//
// Known, honest limitation: this isn't keyboard-operable. Full accessible
// drag-and-drop (arrow-key reordering, aria-live move announcements) is a
// real feature in its own right, not a quick add — flagging rather than
// quietly shipping it as if it were fully accessible.

import { useState } from "react";

interface Task {
  id: string;
  text: string;
}
type ColumnKey = "todo" | "doing" | "done";
type Columns = Record<ColumnKey, Task[]>;

const initialColumns: Columns = {
  todo: [
    { id: "t1", text: "Design column limits" },
    { id: "t2", text: "Wire audit log" },
  ],
  doing: [{ id: "t3", text: "Optimistic UI updates" }],
  done: [{ id: "t4", text: "Auth + permissions" }],
};

const columnLabels: Record<ColumnKey, string> = {
  todo: "To Do",
  doing: "In Progress",
  done: "Done",
};

export default function KanbanSandbox() {
  const [columns, setColumns] = useState<Columns>(initialColumns);
  const [dragging, setDragging] = useState<{ id: string; from: ColumnKey } | null>(null);

  function handleDrop(to: ColumnKey) {
    if (!dragging) return;
    const { id, from } = dragging;
    if (from !== to) {
      setColumns((prev) => {
        const task = prev[from].find((t) => t.id === id);
        if (!task) return prev;
        return {
          ...prev,
          [from]: prev[from].filter((t) => t.id !== id),
          [to]: [...prev[to], task],
        };
      });
    }
    setDragging(null);
  }

  return (
    <div className="rounded-lg border border-border bg-bg/40 p-5">
      <p className="font-mono text-[11px] uppercase tracking-widest2 text-text-faint mb-4">
        Drag a card between columns
      </p>
      <div className="grid grid-cols-3 gap-3">
        {(Object.keys(columns) as ColumnKey[]).map((key) => (
          <div
            key={key}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(key)}
            className="rounded-md border border-border/70 bg-surface p-2.5 min-h-[140px]"
          >
            <p className="text-[10px] uppercase tracking-widest2 text-text-faint mb-2 px-0.5">
              {columnLabels[key]}
            </p>
            <div className="space-y-2">
              {columns[key].map((task) => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => setDragging({ id: task.id, from: key })}
                  className="cursor-grab active:cursor-grabbing rounded border border-border bg-bg px-2.5 py-2 text-xs text-text-muted hover:border-accent-teal/50 transition-colors"
                >
                  {task.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

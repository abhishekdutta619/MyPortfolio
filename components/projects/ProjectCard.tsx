import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6 flex flex-col h-full">
      <p className="text-xs text-text-faint mb-1">{project.category}</p>
      <h3 className="font-display text-lg text-text mb-2">{project.title}</h3>
      <p className="text-sm text-text-muted leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {project.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.badges.map((b) => (
            <span
              key={b}
              className="font-mono text-[10px] rounded-full border border-accent-amber/30 text-accent-amber px-2 py-0.5"
            >
              {b}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-[11px] rounded bg-bg border border-border px-2 py-0.5 text-text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-3 border-t border-border/60">
        {project.github && (
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-teal transition-colors"
          >
            <Github size={14} /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent-teal transition-colors"
          >
            <ExternalLink size={14} /> Demo
          </a>
        )}
      </div>
    </div>
  );
}

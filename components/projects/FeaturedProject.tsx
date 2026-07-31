import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";
import ArchitectureDiagram from "./ArchitectureDiagram";
import KanbanSandbox from "./KanbanSandbox";

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured);
  if (!project) return null;

  return (
    <div className="rounded-xl border border-border bg-surface/60 p-6 md:p-10 mb-8">
      <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10">
        <div>
          <p className="font-mono text-xs text-accent-teal mb-2">01 — Featured</p>
          <h3 className="font-display text-2xl md:text-3xl text-text mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-text-faint mb-5">{project.category}</p>
          <p className="text-sm text-text-muted leading-relaxed mb-5">
            {project.description}
          </p>

          {project.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {project.badges.map((b) => (
                <span
                  key={b}
                  className="font-mono text-[11px] rounded-full border border-accent-amber/30 text-accent-amber px-2.5 py-1"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs rounded-md bg-bg border border-border px-2.5 py-1 text-text-muted"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-teal transition-colors"
              >
                <Github size={16} /> Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-teal transition-colors"
              >
                <ExternalLink size={16} /> Live demo
              </a>
            )}
          </div>
        </div>

        <div className="space-y-5">
          <ArchitectureDiagram />
          <KanbanSandbox />
        </div>
      </div>
    </div>
  );
}

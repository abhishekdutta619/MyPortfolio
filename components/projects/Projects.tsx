import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { projects } from "@/lib/data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Three ways I've solved this problem."
        />
        <Reveal>
          <FeaturedProject />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

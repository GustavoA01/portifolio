import { SectionLabel } from '@/components/ProjectSection/components/SectionLabel';
import type { ProjectPartProps } from '@/components/ProjectSection/types';

export const ProjectHighlights = ({ project }: ProjectPartProps) => (
  <section className="select-none">
    <SectionLabel>Destaques</SectionLabel>
    <div className="grid gap-4 sm:grid-cols-2">
      {project.highlights.map((highlight) => (
        <div
          key={highlight.title}
          className="bg-muted/20 rounded-xl border p-5"
        >
          <h4 className="font-medium">{highlight.title}</h4>
          <p className="text-muted-foreground mt-2 text-sm leading-6">
            {highlight.description}
          </p>
        </div>
      ))}
    </div>
  </section>
);

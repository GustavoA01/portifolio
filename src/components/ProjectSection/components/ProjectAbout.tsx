import { SectionLabel } from '@/components/ProjectSection/components/SectionLabel';
import type { ProjectPartProps } from '@/components/ProjectSection/types';

export const ProjectAbout = ({ project }: ProjectPartProps) => (
  <section className="select-none">
    <SectionLabel>O que é</SectionLabel>
    <p className="text-muted-foreground max-w-4xl text-base leading-8">
      {project.about}
    </p>
  </section>
);

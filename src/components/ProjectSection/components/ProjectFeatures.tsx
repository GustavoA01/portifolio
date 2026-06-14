import { CheckCircle2 } from 'lucide-react';
import { SectionLabel } from '@/components/ProjectSection/components/SectionLabel';
import type { ProjectPartProps } from '@/components/ProjectSection/types';

export const ProjectFeatures = ({ project }: ProjectPartProps) => (
  <section className="select-none">
    <SectionLabel>Funcionalidades</SectionLabel>
    <ul className="grid gap-3 md:grid-cols-2">
      {project.features.map((feature) => (
        <li key={feature} className="flex gap-3 text-sm">
          <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
          <span className="text-muted-foreground leading-6">{feature}</span>
        </li>
      ))}
    </ul>
  </section>
);

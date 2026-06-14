import { Lightbulb, Sparkles } from 'lucide-react';
import type { ProjectPartProps } from '@/components/ProjectSection/types';

export const ProjectContext = ({ project }: ProjectPartProps) => (
  <section className="grid gap-5 select-none">
    <div className="bg-muted/25 rounded-xl border p-5 lg:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Lightbulb className="text-primary size-4" />
        <h4 className="text-sm font-semibold">O contexto</h4>
      </div>
      <p className="text-muted-foreground text-sm leading-7 lg:text-base">
        {project.problem}
      </p>
    </div>

    <div className="bg-muted/25 rounded-xl border p-5 lg:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="text-primary size-4" />
        <h4 className="text-sm font-semibold">Como o projeto resolve</h4>
      </div>
      <p className="text-muted-foreground text-sm leading-7 lg:text-base">
        {project.solution}
      </p>
    </div>
  </section>
);

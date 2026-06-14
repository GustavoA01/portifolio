import { AlertCircle } from 'lucide-react';
import type { ProjectPartProps } from '@/components/ProjectSection/types';

export const ProjectNote = ({ project }: ProjectPartProps) => {
  if (!project.note) return null;

  return (
    <div className="flex gap-3 rounded-xl border border-amber-500/25 bg-amber-500/5 p-5 select-none">
      <AlertCircle className="mt-0.5 size-5 shrink-0 text-amber-500" />
      <div>
        <p className="text-sm font-medium">Observação</p>
        <p className="text-muted-foreground mt-1 text-sm leading-6">
          {project.note}
        </p>
      </div>
    </div>
  );
};

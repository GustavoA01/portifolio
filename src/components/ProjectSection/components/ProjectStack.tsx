import { Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { projectBaseStack } from '@/data/constants';
import type { ProjectPartProps } from '@/components/ProjectSection/types';

export const ProjectStack = ({ project }: ProjectPartProps) => (
  <section className="select-none">
    <div className="mb-4 flex items-center gap-2">
      <Cpu className="text-primary size-4" />
      <p className="text-primary text-xs font-semibold tracking-widest uppercase">
        Tecnologias e integrações
      </p>
    </div>
    <div className="flex flex-wrap gap-2">
      {project.integrations.map((integration) => (
        <Badge key={integration} variant="secondary">
          {integration}
        </Badge>
      ))}
      {projectBaseStack.map((item) => (
        <Badge key={item} variant="outline">
          {item}
        </Badge>
      ))}
    </div>
  </section>
);

import { ArrowUpRight, CheckCircle2, Code2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projectBaseStack, type Project } from '@/data/constants';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <Card className="overflow-hidden">
    <div className={`h-2 bg-linear-to-r ${project.accent}`} />
    <CardHeader>
      <div className="bg-primary/10 text-primary mb-4 flex size-11 items-center justify-center rounded-md">
        <project.icon className="size-5" />
      </div>
      <CardTitle>{project.name}</CardTitle>
      <CardDescription className="text-base leading-7 select-none">
        {project.summary}
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="bg-muted/30 rounded-md border p-4 select-none">
          <p className="text-muted-foreground text-xs font-medium uppercase">
            Problema
          </p>
          <p className="mt-2 text-sm leading-6">{project.problem}</p>
        </div>
        <div className="bg-muted/30 rounded-md border p-4 select-none">
          <p className="text-muted-foreground text-xs font-medium uppercase">
            Solução
          </p>
          <p className="mt-2 text-sm leading-6">{project.solution}</p>
        </div>
      </div>

      <div className="select-none">
        <p className="mb-3 text-sm font-medium">Funcionalidades</p>
        <div className="grid gap-3">
          {project.features.map((feature) => (
            <div key={feature} className="flex gap-3 text-sm">
              <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
              <span className="text-muted-foreground leading-6">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="select-none">
        <p className="mb-3 text-sm font-medium">Integrações</p>
        <div className="flex flex-wrap gap-2">
          {project.integrations.map((integration) => (
            <Badge key={integration} variant="secondary">
              {integration}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {projectBaseStack.map((item) => (
          <Badge key={item} variant="outline">
            {item}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <a href={project.href} target="_blank" rel="noreferrer">
            Acessar
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={project.repo} target="_blank" rel="noreferrer">
            <Code2 className="size-4" />
            Repositório
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

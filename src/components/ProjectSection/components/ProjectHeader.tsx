import { ArrowUpRight, Code2, Play } from 'lucide-react';
import { ProjectIcon } from '@/components/ProjectIcon';
import { Button } from '@/components/ui/button';
import type { ProjectHeaderProps } from '@/components/ProjectSection/types';
import { accessConfig } from '@/data/constants';

export const ProjectHeader = ({ project, index }: ProjectHeaderProps) => {
  const { label: defaultLabel, href } = accessConfig[project.accessMode];
  const label = project.accessLabel ?? defaultLabel;
  const primaryHref = href(project);
  const isExternal = primaryHref.startsWith('http');

  return (
    <header className="relative overflow-hidden border-b px-5 py-8 lg:px-8">
      <div
        className={`pointer-events-none absolute inset-0 bg-linear-to-br ${project.accent} opacity-[0.07]`}
      />
      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <ProjectIcon
              src={project.iconUrl}
              alt={`Ícone do ${project.name}`}
            />
            <div>
              <p className="text-primary text-sm font-medium">
                Projeto {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-1 text-3xl font-semibold lg:text-4xl">
                {project.name}
              </h3>
              <p className="text-muted-foreground mt-2 sm:text-lg">
                {project.tagline}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button asChild>
              <a
                href={primaryHref}
                {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {project.accessMode === 'video' ? (
                  <Play className="size-4" />
                ) : null}
                {label}
                {project.accessMode !== 'video' ? (
                  <ArrowUpRight className="size-4" />
                ) : null}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={project.repo} target="_blank" rel="noreferrer">
                <Code2 className="size-4" />
                Código no GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

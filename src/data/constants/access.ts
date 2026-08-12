import type { Project, ProjectAccessMode } from '../types';

export const accessConfig: Record<
  ProjectAccessMode,
  { label: string; href: (project: Project) => string }
> = {
  live: {
    label: 'Acessar projeto',
    href: (project) => project.href,
  },
  video: {
    label: 'Ver demo em vídeo',
    href: (project) => project.youtubeUrl ?? `#${project.id}-demo`,
  },
};

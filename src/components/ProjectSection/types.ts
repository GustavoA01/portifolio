import type { Project } from '@/data/constants';

export type ProjectPartProps = {
  project: Project;
};

export type ProjectHeaderProps = ProjectPartProps & {
  index: number;
};

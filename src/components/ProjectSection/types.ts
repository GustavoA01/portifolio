import { Project } from '@/data/types';

export type ProjectPartProps = {
  project: Project;
};

export type ProjectHeaderProps = ProjectPartProps & {
  index: number;
};

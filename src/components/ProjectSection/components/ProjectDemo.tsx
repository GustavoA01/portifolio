import { Play } from 'lucide-react';
import { SectionLabel } from '@/components/ProjectSection/components/SectionLabel';
import type { ProjectPartProps } from '@/components/ProjectSection/types';

export const ProjectDemo = ({ project }: ProjectPartProps) => {
  if (!project.demoVideoUrl) return null;

  return (
    <section className="select-none">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <SectionLabel>Demonstração em vídeo</SectionLabel>
        {project.youtubeUrl ? (
          <a
            href={project.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
          >
            <Play className="size-4" />
            Abrir no YouTube
          </a>
        ) : null}
      </div>
      <div className="bg-muted/20 overflow-hidden rounded-xl border shadow-sm">
        <video
          src={project.demoVideoUrl}
          className="aspect-video w-full bg-black object-contain"
          controls
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
};

import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/constants';

export const ProjectsSection = () => (
  <section id="projetos" className="bg-muted/25 border-y">
    <div className="mx-auto w-full max-w-6xl px-5 py-16">
      <div className="mb-8 max-w-3xl select-none">
        <div>
          <p className="text-primary text-sm font-medium">
            Projetos principais
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Produtos com IA, dados e integrações reais
          </h2>
        </div>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-8">
          Dois projetos completos, pensados para resolver problemas reais:
          leitura organizada e descoberta musical personalizada
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  </section>
);

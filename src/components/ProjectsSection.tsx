'use client';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/constants';

export const ProjectsSection = () => (
  <section id="projetos" className="bg-muted/25 border-y">
    <div className="mx-auto w-full max-w-6xl px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 max-w-3xl select-none"
      >
        <div>
          <p className="text-primary text-sm font-medium">
            Projetos principais
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Projetos reais, com IA e integrações
          </h2>
        </div>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-8">
          Dois projetos completos, pensados para resolver problemas reais:
          organização de leitura e descoberta musical personalizada
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

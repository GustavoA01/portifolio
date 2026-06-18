'use client';
import { motion } from 'framer-motion';
import { ProjectSection } from '@/components/ProjectSection';
import { projects } from '@/data/constants';

export const ProjectsSection = () => (
  <section id="projetos" className="bg-muted/25 border-y">
    <div className="mx-auto w-full max-w-4xl px-5 py-16 lg:py-20">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14 max-w-3xl select-none"
      >
        <p className="text-primary text-sm font-medium">Projetos principais</p>
        <h2 className="mt-2 text-3xl font-semibold lg:text-4xl">
          Aplicações completas em produção
        </h2>
        <p className="text-muted-foreground mt-4 text-lg leading-8">
          Três produtos reais que mostram o que cada projeto faz, qual problema
          resolve e como foi construído, com integrações de IA, APIs externas,
          banco de dados e, em alguns casos, automação fora do navegador.
        </p>
      </motion.header>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <ProjectSection key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

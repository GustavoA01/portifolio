'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { ProjectIcon } from '@/components/ProjectIcon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { profile, projects } from '@/data/constants';

export const HeroSection = () => (
  <section
    id="inicio"
    className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24"
  >
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.45 }}
      >
        <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-6 w-fit select-none">
          {profile.tagline}
        </Badge>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.5 }}
        className="max-w-3xl text-4xl leading-tight font-semibold select-none sm:text-5xl lg:text-6xl"
      >
        {profile.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26, duration: 0.5 }}
        className="text-muted-foreground mt-5 max-w-2xl text-lg leading-8 select-none"
      >
        {profile.headline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34, duration: 0.5 }}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <Button asChild size="lg">
          <a href="#projetos">
            Ver projetos
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Code2 className="size-4" />
            GitHub
          </a>
        </Button>
      </motion.div>
    </motion.div>

    <motion.aside
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.22, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center select-none"
    >
      <div className="bg-card w-full rounded-2xl border p-5 shadow-sm lg:p-6">
        <div className="mb-5">
          <p className="text-primary text-sm font-medium">
            Projetos em destaque
          </p>
          <p className="text-muted-foreground mt-1 text-sm leading-6">
            Aplicações em produção com IA, APIs e integrações reais
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={`#${project.id}`}
              aria-label={`Ir para a seção do projeto ${project.name}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 + index * 0.08, duration: 0.4 }}
              className="hover:bg-muted/40 group cursor-pointer rounded-xl p-4 transition-colors"
            >
              <div
                className={`mb-3 h-1 w-12 rounded-full bg-linear-to-r ${project.accent} transition-all group-hover:w-16`}
              />
              <div className="flex items-start gap-3">
                <ProjectIcon
                  src={project.iconUrl}
                  alt={`Ícone do ${project.name}`}
                  size="sm"
                />
                <div className="min-w-0">
                  <p className="font-medium">{project.name}</p>
                  <p className="text-muted-foreground mt-1 text-sm leading-6">
                    {project.summary}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.aside>
  </section>
);

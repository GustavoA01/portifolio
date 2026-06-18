'use client';
import { motion } from 'framer-motion';
import { ProjectHeader } from './components/ProjectHeader';
import { ProjectHeaderProps } from './types';
import { ProjectAbout } from './components/ProjectAbout';
import { ProjectContext } from './components/ProjectContext';
import { ProjectDemo } from './components/ProjectDemo';
import { ProjectHighlights } from './components/ProjectHighlights';
import { ProjectFeatures } from './components/ProjectFeatures';
import { ProjectNote } from './components/ProjectNote';
import { ProjectStack } from './components/ProjectStack';

export const ProjectSection = ({ project, index }: ProjectHeaderProps) => (
  <motion.article
    id={project.id}
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="bg-card scroll-mt-24 overflow-hidden rounded-2xl border"
  >
    <div className={`h-1.5 bg-linear-to-r ${project.accent}`} />
    <ProjectHeader project={project} index={index} />
    <main className="flex flex-col gap-12 px-5 py-10 lg:px-8">
      <ProjectAbout project={project} />
      <ProjectContext project={project} />
      <ProjectDemo project={project} />
      <ProjectHighlights project={project} />
      <ProjectFeatures project={project} />
      <ProjectNote project={project} />
      <ProjectStack project={project} />
    </main>
  </motion.article>
);

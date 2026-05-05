import { ArrowUpRight, Code2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { profile, projects } from '@/data/constants';

export const HeroSection = () => (
  <section
    id="inicio"
    className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24"
  >
    <div className="flex flex-col justify-center">
      <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-6 w-fit select-none">
        {profile.tagline}
      </Badge>
      <h1 className="max-w-3xl text-4xl leading-tight font-semibold select-none sm:text-5xl lg:text-6xl">
        {profile.name}
      </h1>
      <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-8 select-none">
        {profile.headline}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
      </div>
    </div>

    <div className="relative flex min-h-90 items-center justify-center select-none">
      <div className="bg-muted/35 absolute inset-0 rounded-xl border" />
      <div className="bg-card relative w-full max-w-md rounded-lg border p-4 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-amber-400" />
            <span className="size-3 rounded-full bg-emerald-400" />
          </div>
          <Sparkles className="text-primary size-5" />
        </div>
        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-background rounded-md border p-4"
            >
              <div
                className={`mb-4 h-2 rounded-full bg-linear-to-r ${project.accent}`}
              />
              <div className="flex items-start gap-3">
                <project.icon className="text-primary mt-1 size-5" />
                <div>
                  <p className="font-medium">{project.name}</p>
                  <p className="text-muted-foreground mt-1 text-sm leading-6">
                    {project.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

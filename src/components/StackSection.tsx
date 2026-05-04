import { Badge } from '@/components/ui/badge';
import { stack } from '@/data/constants';

export const StackSection = () => (
  <section id="stack" className="mx-auto w-full max-w-6xl px-5 py-16">
    <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
      <header className="select-none">
        <p className="text-primary text-sm font-medium">Stack</p>
        <h2 className="mt-2 text-3xl font-semibold">
          Tecnologias que utilizo no desenvolvimento
        </h2>
      </header>
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <Badge
            key={item}
            variant="outline"
            className="rounded-md px-3 text-sm select-none"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  </section>
);

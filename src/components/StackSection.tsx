'use client';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { stack } from '@/data/constants';

export const StackSection = () => (
  <section id="stack" className="mx-auto w-full max-w-6xl px-5 py-16">
    <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
      <motion.header
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="select-none"
      >
        <p className="text-primary text-sm font-medium">Stack</p>
        <h2 className="mt-2 text-3xl font-semibold">Tecnologias que utilizo</h2>
      </motion.header>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.035,
            },
          },
        }}
        className="flex flex-wrap gap-2"
      >
        {stack.map((item) => (
          <motion.div
            key={item}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.28 }}
          >
            <Badge
              variant="outline"
              className="rounded-md px-3 text-sm select-none"
            >
              {item}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

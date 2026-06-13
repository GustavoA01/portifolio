'use client';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Check, Copy, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/constants';
import { useCopyText } from '@/hooks/useCopyText';

const phoneIsConfigured = profile.phone !== 'Adicione seu telefone aqui';

export const ContactSection = () => {
  const { copiedField, copyToClipboard } = useCopyText();

  return (
    <section id="contato" className="mx-auto w-full max-w-6xl px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="bg-card rounded-lg border p-6 md:p-8"
      >
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="select-none">
            <p className="text-primary text-sm font-medium">Contato</p>
            <h2 className="mt-2 text-3xl font-semibold">Entre em contato</h2>
          </div>
          <Button asChild variant="outline">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <BriefcaseBusiness className="size-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="grid min-w-0 gap-4 md:grid-cols-2">
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => copyToClipboard(profile.email, 'email')}
            className="hover:border-primary/50 hover:bg-muted/30 flex min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-md border p-4 text-left transition-colors sm:gap-4"
          >
            <span className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-md">
              <Mail className="size-5" />
            </span>
            <span className="min-w-0 flex-1 overflow-hidden">
              <span className="text-muted-foreground block text-sm select-none">
                Email
              </span>
              <span className="block max-w-full truncate font-medium">
                {profile.email}
              </span>
            </span>
            <span className="text-primary shrink-0 select-none">
              {copiedField === 'email' ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
            </span>
          </motion.button>

          <motion.button
            type="button"
            disabled={!phoneIsConfigured}
            whileHover={phoneIsConfigured ? { y: -2 } : undefined}
            whileTap={phoneIsConfigured ? { scale: 0.99 } : undefined}
            onClick={() => copyToClipboard(profile.phone, 'phone')}
            className="hover:border-primary/50 hover:bg-muted/30 disabled:hover:border-border flex min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-md border p-4 text-left transition-colors disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-transparent sm:gap-4"
          >
            <span className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-md">
              <Phone className="size-5" />
            </span>
            <span className="min-w-0 flex-1 overflow-hidden">
              <span className="text-muted-foreground block text-sm select-none">
                Telefone
              </span>
              <span className="block max-w-full truncate font-medium">
                {profile.phone}
              </span>
            </span>
            {phoneIsConfigured && (
              <span className="text-primary shrink-0 select-none">
                {copiedField === 'phone' ? (
                  <Check className="size-4" />
                ) : (
                  <Copy className="size-4" />
                )}
              </span>
            )}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

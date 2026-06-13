'use client';
import { ThemeProvider } from './ThemeProvider';
import { TooltipProvider } from './ui/tooltip';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>
    <TooltipProvider>{children}</TooltipProvider>
  </ThemeProvider>
);

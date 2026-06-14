type SectionLabelProps = {
  children: React.ReactNode;
};

export const SectionLabel = ({ children }: SectionLabelProps) => (
  <p className="text-primary mb-3 text-xs font-semibold tracking-widest uppercase">
    {children}
  </p>
);

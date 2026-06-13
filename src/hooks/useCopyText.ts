import { useState } from 'react';

export const useCopyText = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(
    null,
  );

  const copyToClipboard = async (value: string, field: 'email' | 'phone') => {
    await navigator.clipboard.writeText(value);
    setCopiedField(field);
    window.setTimeout(() => setCopiedField(null), 1800);
  };

  return { copiedField, copyToClipboard };
};

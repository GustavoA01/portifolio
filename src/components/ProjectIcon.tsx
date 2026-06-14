import Image from 'next/image';
import { cn } from '@/lib/utils';

type ProjectIconProps = {
  src: string;
  alt: string;
  size?: 'sm' | 'md';
  className?: string;
};

const sizeClasses = {
  sm: 'size-9 rounded-lg',
  md: 'size-14 rounded-xl',
};

export const ProjectIcon = ({
  src,
  alt,
  size = 'md',
  className,
}: ProjectIconProps) => (
  <div
    className={cn(
      'bg-muted/40 relative shrink-0 overflow-hidden border',
      sizeClasses[size],
      className,
    )}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes={size === 'sm' ? '36px' : '56px'}
    />
  </div>
);

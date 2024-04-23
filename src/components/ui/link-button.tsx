import Link from 'next/link';
import { buttonVariants } from './button';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function LinkButton({
  href,
  text,
  className,
  children,
}: {
  href: string;
  text: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        `${buttonVariants({
          variant: 'outline',
        })} flex items-center justify-center gap-3`,
        className
      )}
    >
      {text} {children}
    </Link>
  );
}

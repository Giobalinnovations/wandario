import Link from 'next/link';
import { buttonVariants } from './button';
import { cn } from '@/lib/utils';

export default function LinkButton({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        `${buttonVariants({
          variant: 'outline',
        })}`,
        className
      )}
    >
      {text}
    </Link>
  );
}

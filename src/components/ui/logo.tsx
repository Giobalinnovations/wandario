import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

export default function Logo({
  imgSrc,
  className,
}: {
  imgSrc: StaticImageData;
  className?: CSSPropertyRule;
}) {
  return (
    <div className={cn('w-[9.375rem] relative overflow-hidden', className)}>
      <Image alt="logo" src={imgSrc} className="object-cover" />
    </div>
  );
}

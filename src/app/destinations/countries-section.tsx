import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type CountriesSectionProps = {
  title: string;
  className?: string;
  children?: ReactNode;
};

export default function CountriesSection({
  title,
  className,
  children,
}: CountriesSectionProps) {
  return (
    <>
      <Card
        className={cn(
          'w-full py-3 px-5 rounded-[50px] hover:bg-[#00DBFF]',
          className
        )}
      >
        <div
          className={cn(
            'text-lg  flex items-center justify-between w-full uppercase font-semibold',
            className
          )}
        >
          {title} {children}
        </div>
      </Card>
    </>
  );
}

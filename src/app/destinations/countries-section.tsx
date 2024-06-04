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
      <Card className="w-full py-3 px-5 rounded-[50px]">
        <div
          className={cn(
            'text-xl font-[400] flex items-center justify-between w-full capitalize',
            className
          )}
        >
          {title} {children}
        </div>
      </Card>
    </>
  );
}

import { Card } from '@/components/ui/card';
import { ReactNode } from 'react';

type CountriesSectionProps = {
  title: string;
  children?: ReactNode;
};

export default function CountriesSection({
  title,
  children,
}: CountriesSectionProps) {
  return (
    <>
      <Card className="w-full py-3 px-5 rounded-[50px]">
        <div className="text-xl font-[400] flex items-center justify-between w-full">
          {title} {children}
        </div>
      </Card>
    </>
  );
}

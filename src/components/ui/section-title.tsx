import { cn } from '@/lib/utils';
import React from 'react';

type SectionTitleProps = {
  title: string;
  className?: string;
};

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className={cn('text-3xl font-bold text-black ', className)}>
          {title}
        </h2>
        <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
      </div>
    </>
  );
}

import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import React from 'react';
import GuidelineSection from './guideline-section';
import Image, { StaticImageData } from 'next/image';

type GuidelineCardProps = {
  title: string;
  subtitle: string;
  description?: string;
  imgSrc: StaticImageData;
  alt: string;
};

export default function GuidelineCard({
  title,
  subtitle,
  description,
  imgSrc,
  alt,
}: GuidelineCardProps) {
  return (
    <>
      <Card className="relative rounded-[50px]">
        <div className="relative overflow-hidden">
          <Image src={imgSrc} alt={alt} className="object-cover w-full" />
        </div>
        <CardTitle className="absolute bottom-7  overflow-hidden left-4 text-white">
          <h1 className="text-[90px] ">{title}</h1>
          <div>
            <h2 className="text-[42px]">{subtitle}</h2>
            <div className="border-b-[3px]   border-[#008ebe] w-[90px] my-2"></div>
          </div>
          <CardDescription className="text-white px-1 overflow-hidden line-clamp-4">
            {description}
          </CardDescription>
        </CardTitle>
      </Card>
    </>
  );
}

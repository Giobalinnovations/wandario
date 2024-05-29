import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
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
      <Card className="relative rounded-[30px] transition-all duration-200 hover:scale-110 my-5 mx-4 h-full ">
        <div className="relative">
          <Image
            src={imgSrc}
            alt={alt}
            className="object-cover rounded-[20px] w-full h-full"
          />
        </div>
        <CardContent className="absolute bottom-0 text-white left-0 w-full">
          <CardTitle className="text-[90px] ">{title}</CardTitle>
          <div>
            <h2 className="text-4xl">{subtitle}</h2>
            <div className="border-b-[3px]   border-[#008ebe] w-[90px] my-2"></div>
          </div>
          <CardDescription className="text-white px-1">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}

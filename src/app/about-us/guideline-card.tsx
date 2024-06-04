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
  numbertext: number;
  description?: string;
  imgSrc: StaticImageData | string;
  alt: string;
};

export default function GuidelineCard({
  title,
  numbertext,
  description,
  imgSrc,
  alt,
}: GuidelineCardProps) {
  return (
    <>
      <Card className="relative rounded-[30px]  transition-all duration-200 hover:scale-110 my-5 mx-4 h-full ">
        <div className="relative">
          <Image
            src={imgSrc}
            alt={alt}
            className="object-cover rounded-[20px] w-full h-full"
          />
        </div>
        <CardContent className="absolute bottom-0 overflow-hidden hover:-translate-y-6 transition-all   text-white left-0 w-full">
          <CardTitle className="text-[90px] text-stroke-text">
            {numbertext}
          </CardTitle>
          <div>
            <CardTitle className="text-3xl">{title}</CardTitle>
            <div className="border-b-[3px]   border-[#008ebe] w-[90px] my-2"></div>
          </div>
          <CardDescription className="text-white line-clamp-2 sm:line-clamp-6 lg:line-clamp-none px-1">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}

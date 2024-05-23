import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type TripPlanningCardProps = {
  title: string;
  imgSrc: StaticImageData;
  alt: string;
  description: string;
};

export default function TripPlanningCard({
  title,
  imgSrc,
  alt,
  description,
}: TripPlanningCardProps) {
  return (
    <Card className=" h-full border border-red-600">
      <CardContent className="flex flex-col justify-center gap-2 h-full">
        <Image src={imgSrc} alt={alt} className="mt-2" />
        <CardTitle className="text-[32px]">{title}</CardTitle>
        <CardDescription className="line-clamp-5">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

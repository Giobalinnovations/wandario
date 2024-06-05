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
  imgSrc: StaticImageData | string;
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
    <Card className="">
      <CardContent className="flex flex-col mt-5  justify-center  gap-2  ">
        <Image src={imgSrc} alt={alt} className="object-cover size-14" />
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="line-clamp-6 overflow-hidden">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

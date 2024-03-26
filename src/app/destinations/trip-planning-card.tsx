import { Card, CardDescription, CardTitle } from '@/components/ui/card';
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
    <Card className="flex flex-col gap-4 p-4">
      <Image src={imgSrc} alt={alt} />
      <CardTitle>
        <h1 className="text-[32px]">{title}</h1>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}

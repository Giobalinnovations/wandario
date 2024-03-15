import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

type TravelCardProps = {
  title: string;
  alt: string;
  imgSrc: StaticImageData;
};

export default function TravelCard({ imgSrc, title, alt }: TravelCardProps) {
  return (
    <>
      <Card className="shadow-none border-none font-bold ">
        <CardContent className="flex flex-col items-center  ">
          <Image
            className="hover:scale-110 transition delay-900 ease-in-out"
            src={imgSrc}
            alt={alt}
          />
          <p className="w-1/2">{title}</p>
        </CardContent>
      </Card>
    </>
  );
}

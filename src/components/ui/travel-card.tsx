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
      <div>
        <Card className="shadow-none border-none font-bold rounded-[50%] w-[250px] h-[250px] hover:scale-110 transition delay-900 ease-in-out">
          <div className="flex justify-center items-center h-full">
            <Image src={imgSrc} alt={alt} />
          </div>
        </Card>

        <div>
          <p className="font-bold my-5">{title}</p>
        </div>
      </div>
    </>
  );
}

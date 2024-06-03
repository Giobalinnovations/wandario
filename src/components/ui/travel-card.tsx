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
      <div className=" hover:scale-110   transition duration-300 ease-in-out">
        <Card className="shadow-md hover:shadow-cyan-500/50 font-bold rounded-[50%] w-[250px] h-[250px]">
          <div className="flex justify-center items-center h-full">
            <Image src={imgSrc} alt={alt} />
          </div>
        </Card>

        <p className="font-bold my-5 text-center">{title}</p>
      </div>
    </>
  );
}

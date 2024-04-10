import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CardCountriesProps = {
  description: string;
  btn: string;
  CountriesName: string;
  imgSrc: StaticImageData;
  alt: string;
};
export default function CardCountries({
  CountriesName,
  description,
  btn,
  imgSrc,
  alt,
}: CardCountriesProps) {
  return (
    <>
      <Card className=" relative rounded-[50px]  text-white">
        <Image src={imgSrc} alt={alt} className="w-full" />
        <CardContent className="absolute bottom-0 left-0">
          <CardTitle className="text-[30px] font-[600]  text-white">
            {CountriesName}
          </CardTitle>
          <CardDescription className="text-[14px] mb-2  text-white">
            {description}
          </CardDescription>
          <Button variant="outline" className="rounded-[100px] bg-transparent">
            {btn}
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

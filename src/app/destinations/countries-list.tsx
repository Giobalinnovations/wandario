import { Card, CardTitle } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CountriesListProps = {
  imgSrc: StaticImageData;
  alt: string;
  CountriesName: string;
};
export default function CountriesList({
  imgSrc,
  alt,
  CountriesName,
}: CountriesListProps) {
  return (
    <>
      <Card className="w-[500px] py-3 px-5 ">
        <div className="flex items-center gap-4 ">
          <Image src={imgSrc} alt={alt} className="" />
          <CardTitle>{CountriesName}</CardTitle>
        </div>
        <div className="border-b-[1px] border-[#272727] mt-3"></div>
      </Card>
    </>
  );
}

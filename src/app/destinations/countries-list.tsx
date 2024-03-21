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
      <div>
        <div className="flex items-center gap-4 py-1">
          <Image src={imgSrc} alt={alt} className="" />
          <h2>{CountriesName}</h2>
        </div>
        <div className="border-b-[1px] border-[#ececec] my-2"></div>
      </div>
    </>
  );
}

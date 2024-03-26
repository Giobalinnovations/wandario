import Image, { StaticImageData } from 'next/image';
import React from 'react';

type AvtarImageProps = {
  imgSrc: StaticImageData;
  alt: string;
};

export default function AvtarImage({ imgSrc, alt }: AvtarImageProps) {
  return (
    <>
      <div>
        <Image src={imgSrc} alt={alt} className="w-[50px] h-[50px]" />
      </div>
    </>
  );
}

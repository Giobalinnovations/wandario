import Image, { StaticImageData } from 'next/image';
import React from 'react';

type AvtarImageProps = {
  imgSrc: StaticImageData;
  alt: string;
};

export default function AvtarImage({ imgSrc, alt }: AvtarImageProps) {
  return (
    <>
      <div className="w-[50px] h-[50px] rounded-full shrink-0">
        <Image
          src={imgSrc}
          alt={alt}
          className="object-cover w-[50px] h-[50px] rounded-full"
        />
      </div>
    </>
  );
}

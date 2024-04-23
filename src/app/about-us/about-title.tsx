import Image, { StaticImageData } from 'next/image';
import React from 'react';

type AboutTitleProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imgSrc: StaticImageData;
  imgSrc2: StaticImageData;
  alt: string;
};

export default function AboutTitle({
  title,
  paragraph1,
  paragraph2,
  imgSrc,
  imgSrc2,
  alt,
}: AboutTitleProps) {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center lg:flex-row">
        <div className="flex flex-col gap-2 basis-[43%] overflow-hidden ">
          <div>
            <h2 className="font-bold text-3xl">{title}</h2>
            <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
          </div>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>

        <div className="flex gap-4 relative">
          <div className="absolute bottom-6 -right-24 w-[300px] h-[300px] rounded-[50%] bg-[#00DBFF4D]"></div>
          <Image src={imgSrc} alt={alt} className="mb-28" />
          <div className="absolute bottom-3 right-60 w-[280px] h-[150px]  border-[3px] border-[#00DBFF]"></div>
          <div className="absolute top-44 right-60 w-[180px] h-[180px] rounded-[50%] bg-[#00DBFF4D]"></div>
          <Image src={imgSrc2} alt={alt} className="mt-28" />
        </div>
      </div>
    </>
  );
}

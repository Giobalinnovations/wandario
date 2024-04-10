import Image, { StaticImageData } from 'next/image';
import { title } from 'process';
import React from 'react';

type VisionSectionProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imgSrc: StaticImageData;
  alt: string;
};

export default function VisionSection({
  title,
  paragraph1,
  paragraph2,
  imgSrc,
  alt,
}: VisionSectionProps) {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-between lg:flex-row mt-11">
          <div className="flex flex-col gap-2 basis-[28%] ">
            <div>
              <h2 className="font-bold text-3xl">{title}</h2>
              <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
            </div>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>

          <div>
            <Image src={imgSrc} alt={alt} />
          </div>
        </div>
      </section>
    </>
  );
}

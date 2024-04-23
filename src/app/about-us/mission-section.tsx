import Image, { StaticImageData } from 'next/image';
import { title } from 'process';
import React from 'react';

type MissionSectionProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imgSrc: StaticImageData;
  alt: string;
};

export default function MissionSection({
  title,
  paragraph1,
  paragraph2,
  imgSrc,
  alt,
}: MissionSectionProps) {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="relative">
            <div className="absolute bottom-6 -z-10 -left-24 w-[300px] h-[300px] rounded-[50%] bg-[#00DBFF4D]"></div>
            <Image src={imgSrc} alt={alt} />
            <div className="absolute -z-10 top-7 -right-12 w-[180px] h-[180px] rounded-[50%] bg-[#00DBFF4D]"></div>
          </div>

          <div className="flex flex-col gap-2 basis-[28%] ">
            <div>
              <h2 className="font-bold text-3xl">{title}</h2>
              <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
            </div>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      </section>
    </>
  );
}

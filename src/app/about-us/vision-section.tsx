import TitleUnderline from '@/components/ui/title-underline';
import Image, { StaticImageData } from 'next/image';
import { title } from 'process';
import React from 'react';

type VisionSectionProps = {
  paragraph: string;
  imgSrc: StaticImageData;
  alt: string;
};

export default function VisionSection({
  paragraph,
  imgSrc,
  alt,
}: VisionSectionProps) {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-between lg:flex-row mt-11">
          <div className="flex flex-col gap-2 basis-[48%] ">
            <div>
              <TitleUnderline title="Our Vision" />
            </div>
            <p className="font-medium text-lg">{paragraph}</p>
          </div>

          <div className="relative">
            <div className="absolute bottom-6 -z-10 -left-24 w-[300px] h-[300px] rounded-[50%] bg-[#00DBFF4D]"></div>
            <Image
              src={imgSrc}
              alt={alt}
              className="object-cover size-[430px] h-full"
            />
            <div className="absolute -z-10 top-7 -right-12 w-[180px] h-[180px] rounded-[50%] bg-[#00DBFF4D]"></div>
          </div>
        </div>
      </section>
    </>
  );
}

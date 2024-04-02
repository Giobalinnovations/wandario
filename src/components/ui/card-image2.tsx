import React from 'react';
import Image, { StaticImageData } from 'next/image';
import AboutSectionTitle from './about-section-title';

type CardImage2Props = {
  alt: string;
  imgSrc: StaticImageData;
};

export default function CardImage2({ imgSrc, alt }: CardImage2Props) {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="basis-[488px]">
          <AboutSectionTitle
            title="About us"
            paragraph1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            paragraph2={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
          />
        </div>

        <Image src={imgSrc} alt={alt} />
      </div>
    </>
  );
}

import React from 'react';
import AboutSectionTitle from './section-title-card';
import Image from 'next/image';
import { cardImg1 } from '@/lib/images';

export default function CardImage2() {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="basis-[488px]">
          <AboutSectionTitle
            title="About us"
            paragraph1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            paragraph2={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
          />
        </div>

        <div>
          <Image src={cardImg1} alt="" />
        </div>
      </div>
    </>
  );
}

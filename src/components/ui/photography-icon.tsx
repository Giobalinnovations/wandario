import React from 'react';
import CardIcon from './card-icon';
import { cardIcon1, cardIcon2, cardIcon3, cardIcon4 } from '@/lib/images';
import PhotographyTitleSection from './photography-title-section';
import Image from 'next/image';
import { Card } from './card';

export default function PhotographyIcon() {
  return (
    <>
      <div className="pt-7 pb-14 rounded-[50px] flex flex-col gap-24 text-white  object-cover bg-[url('/assets/images/photography-icon/photography-bg.png')]  bg-no-repeat px-12">
        <PhotographyTitleSection />
        <div className="flex flex-wrap  justify-center gap-7 lg:flex-row ">
          <CardIcon
            imgSrc={cardIcon1}
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            alt="card icon 1"
          />

          <CardIcon
            imgSrc={cardIcon2}
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            alt="card icon 2"
          />

          <CardIcon
            imgSrc={cardIcon3}
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            alt="card icon 3"
          />

          <CardIcon
            imgSrc={cardIcon4}
            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            alt="card icon 4"
          />
        </div>
      </div>
    </>
  );
}

import React from 'react';
import CardIcon from './card-icon';
import { cardIcon1, cardIcon2, cardIcon3, cardIcon4 } from '@/lib/images';
import PhotographyTitleSection from './photography-title-section';

import { Card } from './card';

export default function PhotographyIcon() {
  return (
    <>
      <div className="pt-7 pb-14 rounded-[30px] object-fill flex flex-col gap-24 text-white  h-full bg-[url('/assets/images/photography-icon/photo-image-bg.jpg')]  bg-no-repeat px-12 border border-red-300">
        <PhotographyTitleSection />
        <div className="grid justify-center gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
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

import React from 'react';
import CardIcon from './card-icon';
import {
  bgGradientPhotography,
  bgImgPhotography,
  cardIcon1,
  cardIcon2,
  cardIcon3,
  cardIcon4,
} from '@/lib/images';
import PhotographyTitleSection from './photography-title-section';
import Image from 'next/image';

export default function PhotographyIcon() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <Image src={bgImgPhotography} alt="" />

        <div className="absolute top-[10%] left-[10%] w-full h-full ">
          <PhotographyTitleSection />
          <div className="flex flex-col  text-center justify-center items-center gap-3 sm:flex-row  my-6 w-2/3 ">
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
      </div>
    </>
  );
}

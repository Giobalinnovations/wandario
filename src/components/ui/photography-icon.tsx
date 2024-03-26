import React from 'react';
import CardIcon from './card-icon';
import {
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
      <div className="relative overflow-hidden text-white">
        <Image src={bgImgPhotography} alt="" />

        <div className="absolute top-[10%] left-[5%]   ">
          <PhotographyTitleSection />
          <div className="flex gap-10 justify-between w-full my-6  ">
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

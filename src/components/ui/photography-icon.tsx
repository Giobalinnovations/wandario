import React from 'react';
import CardIcon from './card-icon';
import PhotographyTitleSection from './photography-title-section';

import { Card } from './card';
import { photographyData } from '@/lib/data';
import Image from 'next/image';
import { photoGraphyBgImg } from '@/lib/images';
import BgImage from './bg-image';

export default function PhotographyIcon() {
  return (
    <>
      <div className="rounded-[30px]  flex flex-col  text-white relative overflow-hidden">
        <BgImage bgImg={photoGraphyBgImg} alt="photography" className="" />

        <div className="p-10 flex flex-col justify-center gap-20">
          <PhotographyTitleSection />
          <div className="grid justify-center gap-5 sm:grid-cols-2 lg:grid-cols-4 ">
            {photographyData?.map(photography => (
              <CardIcon key={photography.title} {...photography} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

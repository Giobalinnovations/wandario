import React from 'react';
import CardIcon from './card-icon';
import PhotographyTitleSection from './photography-title-section';

import { Card } from './card';
import { photographyData } from '@/lib/data';
import Image from 'next/image';
import { photoGraphyBgImg } from '@/lib/images';

export default function PhotographyIcon() {
  return (
    <>
      <div className="rounded-[30px] flex flex-col  text-white relative overflow-hidden h-[1200px] sm:h-[900px] md:h-[900px] lg:h-[600px]">
        <Image
          src={photoGraphyBgImg}
          alt="photography"
          className="object-cover rounded-[30px] h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full p-10 flex flex-col justify-center gap-20">
          {' '}
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

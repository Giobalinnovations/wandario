import React from 'react';
import PopularCardImg from './popular-card-img';
import {
  icelandCardImg,
  indonesiaCardImg,
  japanCardImg,
  philippinesCardImg,
  popularBackgroundImg,
} from '@/lib/images';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function PopularSection() {
  return (
    <>
      <Card className="relative rounded-[50px] ">
        <div className="absolute top-6 mx-auto flex flex-col items-center w-full text-white">
          <h2 className="font-bold text-3xl">Popular Destinations</h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
        </div>
        <Image src={popularBackgroundImg} alt="" />

        <section className="flex absolute bottom-[14%] mx-2.5">
          <PopularCardImg
            title="Philippines"
            imgSrc={philippinesCardImg}
            alt="Philippines Image"
          />
          <PopularCardImg title="Japan" imgSrc={japanCardImg} alt="Japan" />
          <PopularCardImg
            title="Iceland"
            imgSrc={icelandCardImg}
            alt="Iceland"
          />
          <PopularCardImg
            title="Indonesia"
            imgSrc={indonesiaCardImg}
            alt="Indonesia"
          />
        </section>
      </Card>
    </>
  );
}

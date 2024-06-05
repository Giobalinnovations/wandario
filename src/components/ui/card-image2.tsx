import React from 'react';
import AboutSectionTitle from './section-title-card';
import Image from 'next/image';
import { cardImg1 } from '@/lib/images';

export default function CardImage2() {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row gap-7">
        <div className="basis-[488px]">
          <AboutSectionTitle
            title="About us"
            paragraph1={`Myths remain myths until they’re explored. Embark on the Ultimate Journey with Travel Reviews Guide! We believe in the transformative power of exploring the world – it’s not just a destination; it’s a vibrant experience waiting to unfold. At Travel Reviews Guide, we’re your modern, positive, and awesome travel companion, dedicated to making every trip unforgettable.`}
            paragraph2={`Let’s turn your travel dreams into reality with Travel Reviews Guide – your best travel experts online and a trusted partner in wanderlust!`}
          />
        </div>

        <div>
          <Image src={cardImg1} alt="" className="object-cover" />
        </div>
      </div>
    </>
  );
}

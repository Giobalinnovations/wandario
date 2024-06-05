import React from 'react';
import AboutTitle from './about-title';
import { aboutImg1, aboutImg2 } from '@/lib/images';

export default function AboutContinents() {
  return (
    <>
      <div>
        <AboutTitle
          title="About Us"
          paragraph={`At Travel Reviews Guide, we recognise the value of exploring the world. It’s not just about going to some place, it is about living and experiencing it. As the saying goes, “To travel is to live,” and we hope to make your trip more memorable in every way possible.
          `}
          paragraphTwo={`At Travel Reviews Guide, we recognise the value of exploring the world. It’s not just about going to some place, it is about living and experiencing it. As the saying goes, “To travel is to live,” and we hope to make your trip more memorable in every way possible.`}
          imgSrc={aboutImg1}
          imgSrc2={aboutImg2}
          alt=""
        />
      </div>
    </>
  );
}

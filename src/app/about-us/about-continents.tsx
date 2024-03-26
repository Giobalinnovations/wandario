import React from 'react';
import AboutTitle from './about-title';
import { aboutImg1, aboutImg2 } from '@/lib/images';

export default function AboutContinents() {
  return (
    <>
      <div>
        <AboutTitle
          title="About Us"
          paragraph1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          paragraph2={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
          imgSrc={aboutImg1}
          imgSrc2={aboutImg2}
          alt=""
        />
      </div>
    </>
  );
}

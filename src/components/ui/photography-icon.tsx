import React from 'react';
import CardIcon from './card-icon';
import { cardIcon1, cardIcon2, cardIcon3, cardIcon4 } from '@/lib/images';

export default function PhotographyIcon() {
  return (
    <>
      <div className="flex  flex-col  text-center justify-center items-center gap-3 sm:flex-row">
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
    </>
  );
}

import React from 'react';
import GuidelineCard from './guideline-card';
import { guideCardImg1, guideCardImg2, guideCardImg3 } from '@/lib/images';

export default function GuidelineSection() {
  return (
    <>
      <div className="flex items-center mb-7 flex-col">
        <h1 className="font-bold text-[32px]">Our Guidelines</h1>
        <div className="border-b-[3px]   border-[#008ebe] w-[90px] my-2"></div>
      </div>
      <section className="flex gap-3">
        <GuidelineCard
          title="01"
          subtitle="Lorem Ipsum"
          description=""
          imgSrc={guideCardImg1}
          alt="guide image"
        />
        <GuidelineCard
          title="02"
          subtitle="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          imgSrc={guideCardImg2}
          alt="guide image 2"
        />
        <GuidelineCard
          title="03"
          subtitle="Lorem Ipsum"
          description=""
          imgSrc={guideCardImg3}
          alt="guide image 3"
        />
      </section>
    </>
  );
}

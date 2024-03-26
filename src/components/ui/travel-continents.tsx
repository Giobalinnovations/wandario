import React from 'react';
import SectionTitle from './section-title';
import TravelCard from './travel-card';
import {
  packingGuideImg,
  tipsForPlanningImg,
  travelActivityGuidesImg,
  travelSafetyAdviceImg,
} from '@/lib/images';
import { Button } from './button';

export default function TravelContinents() {
  return (
    <>
      <SectionTitle title="Travel Guide Reviews & Tips" />

      <div className="flex text-center flex-col items-center justify-center sm:flex-row gap-6 my-5">
        <TravelCard
          imgSrc={tipsForPlanningImg}
          title="Tips for planning trips"
          alt="tips for planning"
        />
        <TravelCard
          imgSrc={packingGuideImg}
          title="Packing guides"
          alt="packing guides"
        />
        <TravelCard
          imgSrc={travelSafetyAdviceImg}
          title="Travel safety advice"
          alt="travel safety advice "
        />
        <TravelCard
          imgSrc={travelActivityGuidesImg}
          title="Travel Activity Guides "
          alt="travel activity guides"
        />
      </div>
      <div className="flex justify-center">
        <Button variant="outline">Read More</Button>
      </div>
    </>
  );
}

import React from 'react';
import MapCard from './map-card';
import {
  africaImg,
  asiaImg,
  australiaImg,
  europeImg,
  northAmericaImg,
  packingGuideImg,
  southAmericaImg,
  tipsForPlanningImg,
  travelActivityGuidesImg,
  travelSafetyAdviceImg,
} from '@/lib/images';
import SectionTitle from './ui/section-title';
import TravelCard from './ui/travel-card';
import { Button } from './ui/button';

export default function Continents() {
  return (
    <>
      <section className="container">
        <SectionTitle title="Our Destinations" />

        <div className="flex justify-center items-stretch sm:flex-row gap-8 ">
          <MapCard
            imgSrc={northAmericaImg}
            title="North America"
            alt="north america"
          />
          <MapCard imgSrc={europeImg} title="Europe" alt="europe" />
          <MapCard imgSrc={asiaImg} title="Asia" alt="asia" />
          <MapCard imgSrc={africaImg} title="Africa" alt="africa" />
          <MapCard
            imgSrc={southAmericaImg}
            title="South America"
            alt="south america"
          />
          <MapCard imgSrc={australiaImg} title="Australia" alt="australia" />
        </div>
        <div className="flex justify-center mb-3 text-[#008EBE] border-[#008EBE]">
          <Button variant="outline">View More</Button>
        </div>
      </section>
    </>
  );
}

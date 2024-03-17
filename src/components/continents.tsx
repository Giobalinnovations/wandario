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

export default function Continents() {
  return (
    <>
      <SectionTitle
        title="Explore Dream Destinations Uncover Best Travel Places In The World
"
      />
      <div className="flex text-center flex-col flex-wrap items-center justify-center sm:flex-row  ">
        <MapCard
          imgSrc={northAmericaImg}
          title="North America"
          alt="north america"
        />
        <MapCard imgSrc={europeImg} title="Europe" alt="europe" />
        <MapCard imgSrc={asiaImg} title="Asia" alt="asia" />
        <MapCard imgSrc={africaImg} title="North America" alt="north america" />
        <MapCard
          imgSrc={southAmericaImg}
          title="South America"
          alt="south america"
        />
        <MapCard imgSrc={australiaImg} title="Australia" alt="australia" />
      </div>

      <SectionTitle
        title="Travel Guide Reviews & Tips
"
      />
      <div className="flex text-center flex-col items-center justify-center sm:flex-row">
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
    </>
  );
}

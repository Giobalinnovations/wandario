import React from 'react';
import SectionTitle from './section-title';
import TravelCard from './travel-card';

import { Button } from './button';
import { travelGuidesData } from '@/lib/data';

export default function TravelContinents() {
  return (
    <>
      <SectionTitle title="Travel Guide Reviews & Tips" />

      <div className="flex flex-wrap justify-center items-center gap-5">
        {travelGuidesData.map(travelGuide => (
          <TravelCard key={travelGuide.title} {...travelGuide} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="outline">Read More</Button>
      </div>
    </>
  );
}

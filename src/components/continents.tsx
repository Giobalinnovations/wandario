import React from 'react';
import MapCard from './map-card';
import SectionTitle from './ui/section-title';
import LinkButton from './ui/link-button';
import { continents } from '@/lib/data';

export default function Continents() {
  return (
    <>
      <div className="flex flex-col gap-7">
        <SectionTitle title="Our Destinations" />
        <div className="flex justify-center gap-6 flex-wrap">
          {continents?.map(continent => (
            <MapCard key={continent.title} {...continent} />
          ))}
        </div>
        <div className="flex justify-center mb-3]">
          <LinkButton
            href="/destinations"
            text="View More"
            className="border-secondary text-secondary hover:text-white hover:bg-secondary"
          />
        </div>
      </div>
    </>
  );
}

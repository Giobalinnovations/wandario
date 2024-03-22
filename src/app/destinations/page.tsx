import React from 'react';
import CountriesContinents from './countries-continents';
import { Avatar } from '@/components/ui/avatar';
import AvtarImage from './avtar-image';
import Section from '@/components/ui/section';
import Wrapper from '../../components/ui/wrapper';
import PopularSection from './popular-section';
import PopularCardImg from './popular-card-img';
import TripPlanningSection from './trip-planning-section';
import BlogSection from '@/components/ui/blog-section';

export default function Destinations() {
  return (
    <>
      <Section>
        <Wrapper>
          <CountriesContinents />
        </Wrapper>
      </Section>
      {/* popular section */}
      <Section>
        <Wrapper>
          <PopularSection />
        </Wrapper>
      </Section>
      {/* trip planning section */}
      <Section>
        <Wrapper>
          <TripPlanningSection />
        </Wrapper>
      </Section>

      {/* news blog section */}
      <Section>
        <Wrapper>
          <BlogSection />
        </Wrapper>
      </Section>
    </>
  );
}

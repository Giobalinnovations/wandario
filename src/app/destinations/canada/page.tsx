import CardHotel from '@/components/card-hotel';
import CardHotelSection from '@/components/card-hotel-section';
import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import React from 'react';
import BestTimeVisit from '../north-america/best-time-visit';
import TripPlanningSection from '../trip-planning-section';
import BlogSection from '@/components/ui/blog-section';
import KnowBeforeSection from '../north-america/know-before-section';
import CardCitiesSection from '@/components/card-cities-section';
import CardFoodSection from './card-food-section';
import CardCommunitySection from '@/components/card-community-section';
import ExploreCanada from './explore-canada';
import CardEquipmentSection from '@/components/card-equipment-section';

export default function CanadaBlog() {
  return (
    <>
      <Section>
        <Wrapper>
          <ExploreCanada />
        </Wrapper>
      </Section>
      {/* cities card */}
      <Section>
        <Wrapper>
          <CardCitiesSection />
        </Wrapper>
      </Section>
      {/* konw before you go */}
      <Section>
        <Wrapper>
          <KnowBeforeSection />
        </Wrapper>
      </Section>
      {/* card hotel */}

      <Section>
        <Wrapper>
          <CardHotelSection />
        </Wrapper>
      </Section>
      {/* best time visit */}
      <Section>
        <Wrapper>
          <BestTimeVisit />
        </Wrapper>
      </Section>
      {/* card food */}
      <Section>
        <Wrapper>
          <CardFoodSection />
        </Wrapper>
      </Section>
      {/* community card*/}
      <Section>
        <Wrapper>
          <CardCommunitySection />
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

      <Section>
        <Wrapper>
          <CardEquipmentSection />
        </Wrapper>
      </Section>
    </>
  );
}

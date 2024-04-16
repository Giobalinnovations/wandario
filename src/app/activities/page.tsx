import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import React from 'react';
import PopularSection from '../destinations/popular-section';
import CardEquipmentSection from '@/components/card-equipment-section';
import CountriesContinentsAvtar from '@/components/ui/countries-continents-avtar';
import TravelContinents from '@/components/ui/travel-continents';
import BlogSection from '@/components/ui/blog-section';
import CardStayingHotel from '@/components/ui/card-staying-hotel';

export default function ActivitiesHome() {
  return (
    <>
      <Section>
        <Wrapper>
          <CountriesContinentsAvtar />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <PopularSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardEquipmentSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardStayingHotel />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <TravelContinents />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardEquipmentSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <BlogSection />
        </Wrapper>
      </Section>
    </>
  );
}

import BestTimeVisit from '@/app/destinations/north-america/best-time-visit';
import CardCountriesSection from '@/app/destinations/north-america/card-countries-section';
import KnowBeforeSection from '@/app/destinations/north-america/know-before-section';
import PopularSection from '@/app/destinations/popular-section';
import GuideCardContinents from '@/components/guide-card-continents';
import BlogSection from '@/components/ui/blog-section';
import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import React from 'react';

export default function AccommodationsDetail() {
  return (
    <>
      <Section>
        <Wrapper>
          <CardCountriesSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <KnowBeforeSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <GuideCardContinents />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <BestTimeVisit />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <PopularSection />
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

import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import React from 'react';
import CardCountriesSection from './card-countries-section';
import KnowBeforeSection from './know-before-section';
import GuideCardContinents from '@/components/guide-card-continents';
import BestTimeVisit from './best-time-visit';
import PopularSection from '../popular-section';
import BlogSection from '@/components/ui/blog-section';

export default function NorthAmerica() {
  return (
    <>
      <Section>
        <Wrapper>
          <CardCountriesSection />
        </Wrapper>
      </Section>
      {/* konw before you go */}
      <Section>
        <Wrapper>
          <KnowBeforeSection />
        </Wrapper>
      </Section>
      {/* travel guide */}
      <Section>
        <Wrapper>
          <GuideCardContinents />
        </Wrapper>
      </Section>
      {/* best time visit */}
      <Section>
        <Wrapper>
          <BestTimeVisit />
        </Wrapper>
      </Section>
      {/* popular */}
      <Section>
        <Wrapper>
          <PopularSection />
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

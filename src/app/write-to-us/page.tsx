import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import React from 'react';
import KnowBeforeSection from '../destinations/north-america/know-before-section';
import CardCountriesSection from '../destinations/north-america/card-countries-section';
import BlogSection from '@/components/ui/blog-section';

export default function WritetousHome() {
  return (
    <>
      <Section>
        <Wrapper>
          <KnowBeforeSection />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <CardCountriesSection />
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

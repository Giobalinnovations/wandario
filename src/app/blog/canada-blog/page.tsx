import React from 'react';
import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import CardAnimalSection from '@/components/ui/card-animal-section';

export default function CanadaBlogHome() {
  return (
    <>
      <Section>
        <Wrapper>
          <CardAnimalSection />
        </Wrapper>
      </Section>
    </>
  );
}

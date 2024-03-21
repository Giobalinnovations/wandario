import React from 'react';
import CountriesContinents from './countries-continents';
import { Avatar } from '@/components/ui/avatar';
import AvtarImage from './avtar-image';
import Section from '@/components/ui/section';
import Wrapper from '../../components/ui/wrapper';
import PopularSection from './popular-section';
import PopularCardImg from './popular-card-img';

export default function Destinations() {
  return (
    <>
      <Section>
        <Wrapper>
          <CountriesContinents />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <PopularSection />
        </Wrapper>
      </Section>
    </>
  );
}

import React from 'react';
import CardCountries from './card-countries';
import { Button } from '@/components/ui/button';
import {
  canadaImg,
  mexicoImg,
  peurtoRicoImg,
  unitedStatesImg,
} from '@/lib/images';
import TitleTop from './title-top';

export default function CardCountriesSection() {
  return (
    <>
      <TitleTop title="Explore By Countries" />
      <section className="grid sm:grid-cols-2 gap-5  lg:grid-cols-4 ">
        <CardCountries
          imgSrc={canadaImg}
          alt="Canada"
          CountriesName="Canada"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          btn="Explore more"
        />
        <CardCountries
          imgSrc={mexicoImg}
          alt="Mexico"
          CountriesName="Mexico"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          btn="Explore more"
        />
        <CardCountries
          imgSrc={peurtoRicoImg}
          alt="Peurto Rico"
          CountriesName="Peurto Rico"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          btn="Explore more"
        />
        <CardCountries
          imgSrc={unitedStatesImg}
          alt="United States"
          CountriesName="United States"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
          btn="Explore more"
        />
      </section>
    </>
  );
}

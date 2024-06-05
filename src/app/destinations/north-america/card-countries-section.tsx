import React from 'react';
import CardCountries from './card-countries';
import {
  canadaImg,
  mexicoImg,
  peurtoRicoImg,
  unitedStatesImg,
} from '@/lib/images';
import TitleTop from './title-top';
import { countries } from '@/lib/data';

export default function CardCountriesSection() {
  return (
    <>
      <TitleTop title="Explore By Countries" />
      <section className="grid sm:grid-cols-2 gap-5  lg:grid-cols-4 ">
        {countries.map((country, index) => (
          <CardCountries key={index} {...country} />
        ))}
      </section>
    </>
  );
}

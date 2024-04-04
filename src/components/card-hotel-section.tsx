import React from 'react';
import { Card } from './ui/card';
import CardHotel from './card-hotel';
import { cardHotel1, cardHotel2, cardHotel3, cardHotel4 } from '@/lib/images';
import SectionTitle from './ui/section-title';

export default function CardHotelSection() {
  return (
    <>
      <SectionTitle title={'Our Best Accommodation'} />
      <section className="flex justify-center gap-4 items-center">
        <CardHotel
          imgSrc={cardHotel1}
          title={'Peals Hotel & Suites'}
          alt={'Peals Hotel & Suites'}
          description={`Lorem Ipsum is simply dummy text of
the printing and typesetting industry.`}
          subrating={'Expert Ratings'}
          ratingScore={'9.4'}
        />

        <CardHotel
          imgSrc={cardHotel2}
          title={'Fairmont Banff Spring'}
          alt={'Peals Hotel & Suites'}
          description={`Lorem Ipsum is simply dummy text of
the printing and typesetting industry.`}
          subrating={'Expert Ratings'}
          ratingScore={'9.4'}
        />
        <CardHotel
          imgSrc={cardHotel3}
          title={'Rimrock'}
          alt={'Peals Hotel & Suites'}
          description={`Lorem Ipsum is simply dummy text of
the printing and typesetting industry.`}
          subrating={'Expert Ratings'}
          ratingScore={'9.4'}
        />
        <CardHotel
          imgSrc={cardHotel4}
          title={'The Malcolm Hotel'}
          alt={'Peals Hotel & Suites'}
          description={`Lorem Ipsum is simply dummy text of
the printing and typesetting industry.`}
          subrating={'Expert Ratings'}
          ratingScore={'9.4'}
        />
      </section>
    </>
  );
}

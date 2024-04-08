import Cardlocal from '@/components/card-local';
import SectionTitle from '@/components/ui/section-title';
import { cardfood, cardfood2, cardfood3, cardfood4 } from '@/lib/images';
import React from 'react';

export default function CardFoodSection() {
  return (
    <>
      <SectionTitle title={'Local Cuisines Of Canada'} />
      <div className="flex gap-2">
        <Cardlocal
          imgSrc={cardfood}
          alt="Poutine"
          title="Poutine"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
        <Cardlocal
          imgSrc={cardfood2}
          alt="Bannock"
          title="Bannock"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
        <Cardlocal
          imgSrc={cardfood}
          alt="Butter tarts"
          title="Butter tarts"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
        <Cardlocal
          imgSrc={cardfood4}
          alt="Beavertails"
          title="Beavertails"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
      </div>
    </>
  );
}

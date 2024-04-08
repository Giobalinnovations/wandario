import {
  canadaImg,
  mexicoImg,
  peurtoRicoImg,
  unitedStatesImg,
} from '@/lib/images';

import CardCities from './card-cities';
import TitleTop from '@/app/destinations/north-america/title-top';

export default function CardCitiesSection() {
  return (
    <>
      <TitleTop title="Explore Cities In Canada" />
      <section className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <CardCities
          imgSrc={canadaImg}
          alt="Banff"
          CountriesName="Banff"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
        <CardCities
          imgSrc={mexicoImg}
          alt="Montreal"
          CountriesName="Montreal"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
        <CardCities
          imgSrc={peurtoRicoImg}
          alt="Mont Tremblant "
          CountriesName="Mont Tremblant"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
        <CardCities
          imgSrc={unitedStatesImg}
          alt="Vancouver"
          CountriesName="Vancouver"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        />
      </section>
    </>
  );
}

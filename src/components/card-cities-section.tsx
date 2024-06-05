import TitleTop from '@/app/destinations/north-america/title-top';
import CardCountries from '@/app/destinations/north-america/card-countries';
import { countryCities } from '@/lib/data';

export default function CardCitiesSection() {
  return (
    <>
      <TitleTop title="Explore Cities In Canada" />
      <section className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {countryCities.map((cities, index) => (
          <CardCountries key={index} {...cities} />
        ))}
      </section>
    </>
  );
}

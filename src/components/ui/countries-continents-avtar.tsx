'use client';
import { RiArrowRightSLine } from 'react-icons/ri';

import {
  northAmericaAvtar,
  europeAvtar,
  asiaAvtar,
  africaAvtar,
  australiaAvtar,
  southAvtar,
  locationIcon,
} from '@/lib/images';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CountriesSection from '@/app/destinations/countries-section';
import AvtarImage from './avtar-image';
import CountriesList from '@/app/destinations/countries-list';
import { continents } from '../../lib/data';

const continentsData = [
  {
    name: 'north america',
    image: northAmericaAvtar,
    destinations: [
      {
        name: 'canada',
      },
      {
        name: 'mexico',
      },
      {
        name: 'peurto rico',
      },
      {
        name: 'united states',
      },
    ],
  },
  {
    name: 'europe',
    image: europeAvtar,
    destinations: [
      {
        name: 'italy',
      },
      {
        name: 'germany',
      },
      {
        name: 'united kingdom',
      },
      {
        name: 'france',
      },
    ],
  },
];
export default function CountriesContinentsAvtar() {
  console.log(continentsData.length);
  return (
    <>
      <div className="mb-14">
        <h2 className="font-bold text-3xl">Explore By Countries</h2>
        <div className="border-b-[3px]  border-[#008ebe] max-w-[200px] my-2"></div>
      </div>
      <section className="flex flex-col gap-5 justify-center lg:flex-row  ">
        <div className="flex flex-col justify-center items-center gap-6">
          {continentsData.length > 0
            ? continentsData.map((continent, index) => (
                <div
                  key={continent.name}
                  className=" flex items-center w-full gap-4"
                >
                  <AvtarImage imgSrc={continent.image} alt="north america" />
                  <CountriesSection
                    title={continent.name}
                    className="text-red-500"
                  >
                    <RiArrowRightSLine className="text-3xl" />
                  </CountriesSection>
                </div>
              ))
            : null}
        </div>

        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="font-bold text-3xl">Explore By Countries</h2>
                <div className="border-b-[3px]  border-[#008ebe] w-[200px] mt-2"></div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {continentsData[0].destinations.map(destintion => (
                <CountriesList
                  key={destintion.name}
                  imgSrc={locationIcon}
                  alt="location icon"
                  CountriesName={destintion.name}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

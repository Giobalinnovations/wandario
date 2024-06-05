'use client';
import { RiArrowRightSLine } from 'react-icons/ri';
import {
  northAmericaAvtar,
  europeAvtar,
  asiaAvtar,
  africaAvtar,
  australiaAvtar,
  southAvtar,
} from '@/lib/images';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CountriesSection from '@/app/destinations/countries-section';
import AvtarImage from './avtar-image';
import CountriesList from '@/app/destinations/countries-list';
import { useState } from 'react';

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
  {
    name: 'asia',
    image: asiaAvtar,
    destinations: [
      {
        name: 'japan',
      },
      {
        name: 'india',
      },
      {
        name: 'thailand',
      },
      {
        name: 'hong kong',
      },
    ],
  },
  {
    name: 'africa',
    image: africaAvtar,
    destinations: [
      {
        name: 'nigeria',
      },
      {
        name: 'morocco',
      },
      {
        name: 'south afria',
      },
      {
        name: 'kenya',
      },
    ],
  },
  {
    name: 'south america',
    image: southAvtar,
    destinations: [
      {
        name: 'brazil',
      },
      {
        name: 'argentina',
      },
      {
        name: 'colombia',
      },
      {
        name: 'peru',
      },
    ],
  },
  {
    name: 'australia',
    image: australiaAvtar,
    destinations: [
      {
        name: 'australia',
      },
      {
        name: 'papua new guinea',
      },
      {
        name: 'cocos island',
      },
      {
        name: 'new zealand',
      },
    ],
  },
];
export default function CountriesContinentsAvtar() {
  console.log(continentsData.length);
  const [tab, setTab] = useState(0);

  const handleClick = (index: number) => {
    setTab(index);
  };
  return (
    <>
      <div className="mb-14">
        <h2 className="font-bold text-3xl">Explore By Countries</h2>
        <div className="border-b-[3px]  border-[#008ebe] max-w-[200px] my-2"></div>
      </div>
      <section className="flex flex-col gap-5 justify-center lg:flex-row  ">
        <div className="flex flex-col justify-center items-center gap-4">
          {continentsData.length > 0
            ? continentsData.map((continent, index) => (
                <div
                  key={continent.name}
                  className=" flex items-center w-full gap-4 cursor-pointer"
                  onClick={() => handleClick(index)}
                >
                  <AvtarImage imgSrc={continent.image} alt="north america" />
                  <CountriesSection
                    title={continent.name}
                    className={`${
                      tab === index
                        ? 'text-[#008EBE] bg-[#00DBFF] hover:text-black'
                        : ''
                    }`}
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
            <CardContent className="divide-y-[1px] space-y-2 divide-yellow-[#ececec] flex flex-col">
              {continentsData[tab]?.destinations.map(destintion => (
                <CountriesList
                  key={destintion.name}
                  countriesName={destintion.name}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

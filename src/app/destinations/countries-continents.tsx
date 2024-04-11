import React from 'react';
import CountriesSection from './countries-section';
import { RiArrowRightSLine } from 'react-icons/ri';

import {
  rightArrow,
  northAmericaAvtar,
  europeAvtar,
  asiaAvtar,
  africaAvtar,
  southAmericaImg,
  australiaAvtar,
  southAvtar,
  locationIcon,
} from '@/lib/images';
import { title } from 'process';
import AvtarImage from './avtar-image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CountriesList from './countries-list';

export default function CountriesContinents() {
  return (
    <>
      <div className="mb-14">
        <h2 className="font-bold text-3xl">Explore By Countries</h2>
        <div className="border-b-[3px]  border-[#008ebe] max-w-[200px] my-2"></div>
      </div>
      <section className="flex flex-col gap-5 justify-center lg:flex-row  ">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className=" flex items-center  w-full  gap-4 ">
            <AvtarImage imgSrc={northAmericaAvtar} alt="north america" />
            <CountriesSection title="NORTH AMERICA">
              <RiArrowRightSLine className="text-3xl" />
            </CountriesSection>
          </div>
          <div className="flex items-center  w-full gap-4">
            <AvtarImage imgSrc={europeAvtar} alt="north america" />
            <CountriesSection title="EUROPE">
              <RiArrowRightSLine className="text-3xl" />
            </CountriesSection>
          </div>
          <div className="flex items-center w-full gap-4">
            <AvtarImage imgSrc={asiaAvtar} alt="north america" />
            <CountriesSection title="ASIA">
              <RiArrowRightSLine className="text-3xl" />
            </CountriesSection>
          </div>
          <div className="flex items-center w-full gap-4">
            <AvtarImage imgSrc={africaAvtar} alt="north america" />
            <CountriesSection title="AFRICA">
              <RiArrowRightSLine className="text-3xl" />
            </CountriesSection>
          </div>
          <div className="flex items-center w-full gap-4">
            <AvtarImage imgSrc={southAvtar} alt="north america" />
            <CountriesSection title="SOUTH AMERICA">
              <RiArrowRightSLine className="text-3xl" />
            </CountriesSection>
          </div>
          <div className="flex items-center  w-full gap-4">
            <AvtarImage imgSrc={australiaAvtar} alt="north america" />
            <CountriesSection title="AUSTRALIA">
              <RiArrowRightSLine className="text-3xl" />
            </CountriesSection>
          </div>
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
              <CountriesList
                imgSrc={locationIcon}
                alt="location icon"
                CountriesName="CANADA"
              />
              <CountriesList
                imgSrc={locationIcon}
                alt="location icon"
                CountriesName="MEXICO"
              />
              <CountriesList
                imgSrc={locationIcon}
                alt="location icon"
                CountriesName="PEURTO RICO"
              />
              <CountriesList
                imgSrc={locationIcon}
                alt="location icon"
                CountriesName="UNITED STATES"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

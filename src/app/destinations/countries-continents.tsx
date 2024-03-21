import React from 'react';
import CountriesSection from './countries-section';
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
import CountriesList from './countries-list';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CountriesContinents() {
  return (
    <>
      <div>
        <h2 className="font-bold text-3xl">Explore By Countries</h2>
        <div className="border-b-[3px]  border-[#008ebe] w-[200px] my-2"></div>
      </div>
      <section className="flex justify-between ">
        <div className="flex flex-col gap-4 ">
          <div className="flex w-full items-center gap-4">
            <AvtarImage imgSrc={northAmericaAvtar} alt="north america" />
            <CountriesSection
              title="NORTH AMERICA"
              imgSrc={rightArrow}
              alt="right arrow"
            />
          </div>
          <div className="flex items-center gap-4">
            <AvtarImage imgSrc={europeAvtar} alt="north america" />
            <CountriesSection
              title="EUROPE"
              imgSrc={rightArrow}
              alt="right arrow"
            />
          </div>
          <div className="flex items-center gap-4">
            <AvtarImage imgSrc={asiaAvtar} alt="north america" />
            <CountriesSection
              title="ASIA"
              imgSrc={rightArrow}
              alt="right arrow"
            />
          </div>
          <div className="flex items-center gap-4">
            <AvtarImage imgSrc={africaAvtar} alt="north america" />
            <CountriesSection
              title="AFRICA"
              imgSrc={rightArrow}
              alt="right arrow"
            />
          </div>
          <div className="flex items-center gap-4">
            <AvtarImage imgSrc={southAvtar} alt="north america" />
            <CountriesSection
              title="SOUTH AMERICA"
              imgSrc={rightArrow}
              alt="right arrow"
            />
          </div>
          <div className="flex items-center gap-4">
            <AvtarImage imgSrc={australiaAvtar} alt="north america" />
            <CountriesSection
              title="AUSTRALIA"
              imgSrc={rightArrow}
              alt="right arrow"
            />
          </div>
        </div>

        <div className="w-[700px]">
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

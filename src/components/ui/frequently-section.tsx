import React from 'react';
import Section from './section';
import Wrapper from './wrapper';
import { Card } from './card';
import { CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { minusIcon, plusIcon } from '@/lib/images';

export default function FrequentlySection() {
  return (
    <>
      <div className="flex justify-center gap-4 bg-[url('/assets/images/frequently-bg.png')] bg-no-repeat">
        <Section>
          <Wrapper>
            <div className="flex flex-col items-center mb-5">
              <h2 className=" w-4/6	 text-center mx-auto text-3xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <div className="border-b-[3px]  border-[#008ebe] w-[318px] my-2"></div>
            </div>

            <div className="flex flex-col gap-5">
              <Card className="w-[879px] bg-transparent text-white">
                <CardTitle className="flex justify-between items-center my-3 mx-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <Image
                    src={plusIcon}
                    alt="Plus icon"
                    className="object-cover"
                  />
                </CardTitle>
              </Card>

              <Card className="w-[879px] bg-transparent text-white">
                <CardTitle className="flex justify-between items-center my-3 mx-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <Image src={plusIcon} alt="Plus icon" />
                </CardTitle>
              </Card>

              <Card className="w-[879px] bg-transparent text-white">
                <CardTitle className=" items-center my-3 mx-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <Image src={minusIcon} alt="Plus icon" />
                  </div>
                  <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s`}</p>
                </CardTitle>
              </Card>

              <Card className="w-[879px] bg-transparent text-white">
                <CardTitle className="flex justify-between items-center my-3 mx-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <Image src={plusIcon} alt="Plus icon" />
                </CardTitle>
              </Card>

              <Card className="w-[879px] bg-transparent text-white">
                <CardTitle className="flex justify-between items-center my-3 mx-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <Image src={plusIcon} alt="Plus icon" />
                </CardTitle>
              </Card>
            </div>
          </Wrapper>
        </Section>
      </div>
    </>
  );
}

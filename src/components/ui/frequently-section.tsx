import React from 'react';
import Section from './section';
import Wrapper from './wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { frequentlyData } from '@/lib/data';

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
              {frequentlyData.map((frequently, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="text-white "
                >
                  <AccordionItem
                    value="item-1"
                    className="w-[800px] text-white backdrop-blur-sm border-[2px] rounded-lg px-5"
                  >
                    <AccordionTrigger className="hover:no-underline text-lg text-left no-underline font-semibold">
                      {frequently.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-normal ">
                      {frequently.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </Wrapper>
        </Section>
      </div>
    </>
  );
}

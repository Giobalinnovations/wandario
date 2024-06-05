import React from 'react';
import Section from './section';
import Wrapper from './wrapper';
import { FaPlus } from 'react-icons/fa6';
import { Card } from './card';
import { CardTitle } from '@/components/ui/card';
import { FaMinus } from 'react-icons/fa6';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
                  <FaPlus className="text-[#00DBFF] text-2xl" />
                </CardTitle>
              </Card>

              <Card className="w-[879px] bg-transparent text-white">
                <CardTitle className="flex justify-between items-center my-3 mx-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <FaPlus className="text-[#00DBFF] text-2xl" />
                </CardTitle>
              </Card>

              <Card className="w-[879px] bg-transparent text-white">
                <CardTitle className=" items-center my-3 mx-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </h2>
                    <FaMinus className="text-[#00DBFF] text-2xl" />
                  </div>
                  <p className="font-normal">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s`}</p>
                </CardTitle>
              </Card>

              <Card className="w-[879px] bg-transparent text-white">
                <CardTitle className="flex justify-between items-center my-3 mx-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <FaPlus className="text-[#00DBFF] text-2xl" />
                </CardTitle>
              </Card>

              <Card className="w-[879px] bg-transparent text-white">
                <CardTitle className="flex justify-between items-center my-3 mx-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                  <FaPlus className="text-[#00DBFF] text-2xl" />
                </CardTitle>
              </Card>
            </div>
            {/*
            <Accordion type="single" collapsible className="text-white w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How safe is it for a female to travel solo?
                </AccordionTrigger>
                <AccordionContent>
                  Different people have different ideas about how risky it is to
                  travel alone. Safe travel requires preparation, respect for
                  local customs, appropriate attire, and caution with
                  possessions. Stay aware and trust your instincts no matter
                  where you’re going.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What should be my preparations before travel?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do I get a good deal on my flight tickets?
                </AccordionTrigger>
                <AccordionContent>
                  Plan ahead of time when and how you will purchase your flights
                  to get the best deal possible. Google Flights and other
                  similar sites can help you identify lower travel schedules
                  because costs change based on demand. Check costs for other
                  times or airports, consider routes with layovers, and follow
                  airline promotions on social media. Following these
                  suggestions will assist you in finding low-cost flights.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What are the most important elements for newbies to consider
                  when choosing a lens for trip photography?
                </AccordionTrigger>
                <AccordionContent>
                  The type of shot you wish to take, such as a landscape,
                  portrait, or close-up, influences your lens selection. The
                  aperture (for example, f/2.8) and focal length (for example,
                  35mm) are two important lens characteristics. Most tourists
                  choose a wide lens for landscapes, a versatile zoom for
                  everyday photos, and a prime lens for portraits. For novices,
                  getting started in photography can be challenging, but tools
                  with specific tips can make it easier and help you choose the
                  right gear.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What are some suggestions for coping with differences in
                  language when travelling internationally?
                </AccordionTrigger>
                <AccordionContent>
                  It can be difficult yet fun to travel when you don&#39;t speak
                  the language well. Learn some words before you go. In places
                  with slow internet, Google Translate and a compact phrasebook
                  can come in handy. Be aware of regional differences when you
                  use gestures and body language to communicate. Think about
                  hiring local guides to get more out of your trip and meet new
                  people. Always be thankful and patient, and know that real
                  conversation often goes beyond words.
                </AccordionContent>
              </AccordionItem>
            </Accordion> */}

            <button className="accordion">Section 1</button>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Wrapper>
        </Section>
      </div>
    </>
  );
}

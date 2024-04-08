import GuideCard from './guide-card';
import { Card } from './ui/card';
import Section from './ui/section';

export default function GuideCardContinents() {
  return (
    <>
      <Card className=" rounded-[30px]  bg-[url('/assets/images/destination-countries/north-america/guide-bg.png')] bg-no-repeat">
        <Section className="flex flex-col gap-10 mx-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className=" w-4/6	 text-center mx-auto text-3xl font-bold text-white">
              Travel Guides
            </h2>

            <div className="border-b-[3px]  border-[#008ebe] w-[96px] my-2"></div>
          </div>
          <div className="flex gap-5 justify-center">
            <GuideCard
              CountriesName="Canada"
              description="Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              btn="Read More"
            />
            <GuideCard
              CountriesName="Canada"
              description="Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              btn="Read More"
            />
            <GuideCard
              CountriesName="Mexcio"
              description="Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              btn="Read More"
            />
            <GuideCard
              CountriesName="Canada"
              description="Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              btn="Read More"
            />
          </div>
        </Section>
      </Card>
    </>
  );
}

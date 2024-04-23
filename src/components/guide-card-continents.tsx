import { guideImgBg } from '@/lib/images';
import GuideCard from './guide-card';
import BgImage from './ui/bg-image';
import { Card } from './ui/card';
import Section from './ui/section';

export default function GuideCardContinents() {
  return (
    <>
      <Section>
        <div className="rounded-[30px]  relative overflow-hidden h-full ">
          <BgImage bgImg={guideImgBg} alt="" />
          <div className="px-6 py-14 flex flex-col gap-16">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-[#fff]">Travel Guides</h2>
              <div className="border-b-[3px]  border-[#008ebe] w-[96px] my-2"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
              <GuideCard
                CountriesName="Canada"
                description="Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
              <GuideCard
                CountriesName="Canada"
                description="Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
              <GuideCard
                CountriesName="Peurto Rico"
                description="Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
              <GuideCard
                CountriesName="United States"
                description="Lorem Ipsum is simply dummy text of the printing and typeset-ting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

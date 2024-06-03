import { guideImgBg } from '@/lib/images';
import GuideCard from './guide-card';
import BgImage from './ui/bg-image';
import Section from './ui/section';
import { guidesCards } from '@/lib/data';

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
              {guidesCards.map((guidecard, index) => (
                <GuideCard key={index} {...guidecard} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

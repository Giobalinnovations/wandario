import Image from 'next/image';
import Section from './ui/section';
import Wrapper from './ui/wrapper';
import { heroBanner, image1, image2 } from '@/lib/images';
import BgImage from './ui/bg-image';
import LinkButton from './ui/link-button';
import { FaArrowRightLong } from 'react-icons/fa6';
import HeroSlider from './hero-slider';

export default function Hero() {
  return (
    <Section className="relative overflow-hidden min-h-screen flex items-center py-44 w-full">
      <BgImage alt="hero banner home" bgImg={heroBanner} />
      <Wrapper>
        <div className="grid grid-cols-2 items-center gap-3">
          {' '}
          <div className="flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl lg:text-5xl mb-4 font-[900] text-white">
              Explore the world one place at a time
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Every Tour Is Your Calling! Discover Hidden Beauty, Savor Epic
              Sunsets, & Etch Lifelong Memories. Trust the Expertise of Our Best
              Travel Guide Reviews, Endorsed by the Experienced.
            </p>
            <div className="flex justify-center ">
              <LinkButton
                href="/#"
                text="Plan Your Trip Today"
                className="text-white"
              >
                <FaArrowRightLong />
              </LinkButton>
            </div>
          </div>
          <div className="flex flex-col justify-center relative">
            <HeroSlider />
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}

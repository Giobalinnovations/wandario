import Continents from '@/components/continents';
import MapCard from '@/components/map-card';
import { Button } from '@/components/ui/button';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import SectionTitle from '@/components/ui/section-title';
import TravelCard from '@/components/ui/travel-card';
import CardBlog from '@/components/ui/card-blog';
import BlogSection from '@/components/ui/blog-section';
import CardIcon from '@/components/ui/card-icon';
import PhotographyIcon from '@/components/ui/photography-icon';
import Wrapper from '@/components/ui/wrapper';
import {
  africaImg,
  asiaImg,
  australiaImg,
  europeImg,
  northAmericaImg,
  packingGuideImg,
  southAmericaImg,
  tipsForPlanningImg,
  travelActivityGuidesImg,
  travelSafetyAdviceImg,
} from '@/lib/images';
import NavBar2 from '@/components/ui/navbar2';

export default function Home() {
  return (
    <>
      <Section>
        <Wrapper>
          <NavBar2 />
        </Wrapper>
      </Section>

      {/* <Hero /> */}
      <Section>
        <Wrapper>
          <Continents />
        </Wrapper>
      </Section>
      {/* photography icon */}
      <Section>
        <Wrapper>
          <PhotographyIcon />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <BlogSection />
        </Wrapper>
      </Section>
    </>
  );
}

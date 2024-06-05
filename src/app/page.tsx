import Continents from '@/components/continents';
import Section from '@/components/ui/section';
import BlogSection from '@/components/ui/blog-section';
import PhotographyIcon from '@/components/ui/photography-icon';
import Wrapper from '@/components/ui/wrapper';
import { cardImg1 } from '@/lib/images';
import NavBar2 from '@/components/ui/navbar2';
import CardImage2 from '@/components/ui/card-image2';
import TravelContinents from '@/components/ui/travel-continents';
import FrequentlySection from '@/components/ui/frequently-section';
import LocalCuisnesSection from '@/components/ui/local-cuisnes-section';

export default function Home() {
  return (
    <>
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

      {/* about section */}
      <Section>
        <Wrapper>
          <CardImage2 />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <LocalCuisnesSection />
        </Wrapper>
      </Section>

      {/* travel guide section */}
      <Section>
        <Wrapper>
          <TravelContinents />
        </Wrapper>
      </Section>
      <FrequentlySection />
      {/* news blog section */}
      <Section>
        <Wrapper>
          <BlogSection />
        </Wrapper>
      </Section>
    </>
  );
}

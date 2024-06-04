import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import AboutContinents from './about-continents';
import TravelContinents from '@/components/ui/travel-continents';
import BlogSection from '@/components/ui/blog-section';
import MissionVisionSection from './mission-vision-continents';
import GuidelineSection from './guideline-section.tsx';

export default function AboutUs() {
  return (
    <>
      <Section>
        <Wrapper>
          <AboutContinents />
        </Wrapper>
      </Section>
      {/* travel guide section */}
      <Section>
        <Wrapper>
          <TravelContinents />
        </Wrapper>
      </Section>
      {/* our mission */}
      <Section>
        <Wrapper>
          <MissionVisionSection />
        </Wrapper>
      </Section>
      {/* guidelines */}
      <Section>
        <Wrapper>
          <GuidelineSection />
        </Wrapper>
      </Section>
      {/* news blog section */}
      <Section>
        <Wrapper>
          <BlogSection />
        </Wrapper>
      </Section>
    </>
  );
}

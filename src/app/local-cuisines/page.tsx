import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import PopularSection from '../destinations/popular-section';
import TripPlanningSection from '../destinations/trip-planning-section';
import BlogSection from '@/components/ui/blog-section';
import CountriesContinentsAvtar from '@/components/ui/countries-continents-avtar';

export default function LocalCuisinesHome() {
  return (
    <>
      <Section>
        <Wrapper>
          <CountriesContinentsAvtar />
        </Wrapper>
      </Section>
      {/* popular section */}
      <Section>
        <Wrapper>
          <PopularSection />
        </Wrapper>
      </Section>
      {/* trip planning section */}
      <Section>
        <Wrapper>
          <TripPlanningSection />
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

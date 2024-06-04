import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import PopularSection from '../destinations/popular-section';
import CountriesContinentsAvtar from '@/components/ui/countries-continents-avtar';
import TravelContinents from '@/components/ui/travel-continents';
import BlogSection from '@/components/ui/blog-section';
import CardStayingHotel from '@/components/ui/card-staying-hotel';
import CardResortSection from '@/components/card-resort-section';
import RentalVations from '@/components/rental-vations';

export default function AccommodationsHome() {
  return (
    <>
      <Section>
        <Wrapper>
          <CountriesContinentsAvtar />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <PopularSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardResortSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardStayingHotel />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <TravelContinents />
        </Wrapper>
      </Section>
      {/* <Section>
        <Wrapper>
          <RentalVations />
        </Wrapper>
      </Section> */}
      <Section>
        <Wrapper>
          <BlogSection />
        </Wrapper>
      </Section>
    </>
  );
}

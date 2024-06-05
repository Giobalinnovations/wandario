import Wrapper from '@/components/ui/wrapper';
import KnowBeforeSection from '../destinations/north-america/know-before-section';
import Section from '@/components/ui/section';
import CardStayingHotel from '@/components/ui/card-staying-hotel';
import BlogSection from '@/components/ui/blog-section';

export default function PhotographyHome() {
  return (
    <>
      <Section>
        <Wrapper>
          <KnowBeforeSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardStayingHotel />
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

import Section from '@/components/ui/section';
import Wrapper from '@/components/ui/wrapper';
import CardCountriesSection from '@/app/destinations/north-america/card-countries-section';
import CardImgBlog2 from '@/components/ui/card-img-blog2';
import CardBlogAmericaCanadaSection from './card-blog-america-canada-section';

export default function NorthAmericaBlog() {
  return (
    <>
      <Section>
        <Wrapper>
          <CardCountriesSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardBlogAmericaCanadaSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardBlogAmericaCanadaSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardBlogAmericaCanadaSection />
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <CardBlogAmericaCanadaSection />
        </Wrapper>
      </Section>
    </>
  );
}

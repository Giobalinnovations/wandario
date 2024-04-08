import ExploreContinentsSection from '@/components/ui/explore-continents-section';
import { aboutImg1, aboutImg2 } from '@/lib/images';

export default function ExploreCanada() {
  return (
    <>
      <div>
        <ExploreContinentsSection
          title="Explore Canada "
          paragraph1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          paragraph2={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
          imgSrc={aboutImg1}
          imgSrc2={aboutImg2}
          alt=""
        />
      </div>
    </>
  );
}

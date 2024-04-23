import ContinentsTitleImage from '@/components/ui/continets-title-image';
import ImageCard from '@/components/ui/image-card';
import { cardImg2 } from '@/lib/images';

export default function BestTimeVisit() {
  return (
    <>
      <div className="flex flex-col items-center  gap-8 lg:flex-row">
        <ContinentsTitleImage
          title="Best Time To Visit!"
          paragraph1="Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been
the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of
type and scrambled it to make a type specimen book."
          paragraph2="Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has been
the industry's standard dummy text ever since the
1500s"
        />
        <ImageCard imgSrc={cardImg2} alt="Card Image" />
      </div>
    </>
  );
}

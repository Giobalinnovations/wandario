import { cardCommunitybg, cardCommunityImg } from '@/lib/images';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import CardCommunity from './card-community';

export default function CardCommunitySection() {
  return (
    <>
      <Card className="relative rounded-[50px] ">
        <div className="absolute top-6 mx-auto flex flex-col items-center w-full text-white">
          <h2 className="font-bold text-3xl">Travel Tips From Community</h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
        </div>
        <Image src={cardCommunitybg} alt="" />

        <section className="flex gap-3 absolute bottom-[14%] mx-2.5">
          <CardCommunity
            title="Tip No. 1"
            imgSrc={cardCommunityImg}
            alt="Tip No. 1"
            description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry's standard
dummy text ever since the 1500s, when an
unknown printer took a galley "
          />
          <CardCommunity
            title="Tip No. 1"
            imgSrc={cardCommunityImg}
            alt="Tip No. 1"
            description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry's standard
dummy text ever since the 1500s, when an
unknown printer took a galley "
          />
          <CardCommunity
            title="Tip No. 1"
            imgSrc={cardCommunityImg}
            alt="Tip No. 1"
            description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry's standard
dummy text ever since the 1500s, when an
unknown printer took a galley "
          />
        </section>
      </Card>
    </>
  );
}

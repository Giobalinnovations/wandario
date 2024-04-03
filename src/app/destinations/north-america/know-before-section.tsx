import React from 'react';
import Image from 'next/image';
import ContinentsTitleImage from '@/components/ui/continets-title-image';
import { cardImg1 } from '@/lib/images';
import ImageCard from '@/components/ui/image-card';

export default function KnowBeforeSection() {
  return (
    <>
      <div className="flex items-center gap-8">
        <ImageCard imgSrc={cardImg1} alt="Card Image" />
        <ContinentsTitleImage
          title="Know Before You Go!"
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
      </div>
    </>
  );
}

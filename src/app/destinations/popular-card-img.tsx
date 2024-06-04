import { Card, CardTitle } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

type PopularCardImgProps = {
  title: string;
  imgSrc: StaticImageData;
  alt: string;
};

export default function PopularCardImg({
  title,
  imgSrc,
  alt,
}: PopularCardImgProps) {
  return (
    <>
      <div className="relative overflow-hidden mb-5">
        <Image src={imgSrc} alt={alt} />
        <div className="absolute top-0 left-0  w-full h-full flex justify-center items-end">
          <CardTitle className="text-[32px] text-white mb-4">{title}</CardTitle>
        </div>
      </div>
    </>
  );
}

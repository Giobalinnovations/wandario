import { Card, CardTitle } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

type CardImgProps = {
  imgSrc: StaticImageData;
  alt: string;
};

export default function CardImg({ imgSrc, alt }: CardImgProps) {
  return (
    <>
      <div className="relative overflow-hidden">
        <Image src={imgSrc} alt={alt} className="object-cover" />
      </div>
    </>
  );
}

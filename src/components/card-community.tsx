import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

type CardCommunityProps = {
  title: string;
  imgSrc: StaticImageData;
  alt: string;
  description: string;
};

export default function CardCommunity({
  title,
  imgSrc,
  alt,
  description,
}: CardCommunityProps) {
  return (
    <>
      <div className="relative  rounded-[40px]  ">
        <Image src={imgSrc} alt={alt} />

        <CardContent className="absolute bottom-8  text-white left-0  text-[32px] mx-auto flex flex-col   w-full ">
          <h1 className="font-[700] text-[30px]">{title}</h1>
          <p className="text-[14px]">{description}</p>
        </CardContent>
      </div>
    </>
  );
}

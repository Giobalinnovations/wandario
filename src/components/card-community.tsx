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
      <div className="relative rounded-[40px] ">
        <div className="absolute -z-10 bottom-0 ">
          <Image src={imgSrc} alt={alt} className="object-cover h-full" />
        </div>
        <CardContent className=" text-white z-50  text-[32px] mx-auto flex flex-col">
          <h1 className="font-[700] text-[30px]">{title}</h1>
          <p className="text-[14px]">{description}</p>
        </CardContent>
      </div>
    </>
  );
}

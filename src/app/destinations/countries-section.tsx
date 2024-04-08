import { Card } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type CountriesSectionProps = {
  title: string;
  imgSrc: StaticImageData;
  alt: string;
};

export default function CountriesSection({
  title,
  imgSrc,
  alt,
}: CountriesSectionProps) {
  return (
    <>
      <Card className="w-[300px] flex py-3 px-5  items-center justify-between rounded-[50px] flex-grow">
        <h1 className="text-sm">{title}</h1>
        <Image src={imgSrc} alt={alt} className="" />
      </Card>
    </>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image, { StaticImageData } from 'next/image';

type CardIconProps = {
  title: string;
  alt: string;
  imgSrc: StaticImageData;
};

export default function CardIcon({ imgSrc, alt, title }: CardIconProps) {
  return (
    <>
      <Card className=" backdrop-blur-sm bg-[#0000001A]	 flex flex-col w-[240px] h-[220px] px-[20px]  items-center justify-center gap-2 text-center  text-white]">
        <Image src={imgSrc} alt={alt} />
        <CardTitle className="font-light">{title}</CardTitle>
      </Card>
    </>
  );
}

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
      <Card className=" backdrop-blur-sm bg-[#0000001A] text-white transition duration-300 hover:scale-110">
        <CardContent className="flex items-center justify-center flex-col gap-4 py-5  ">
          <Image src={imgSrc} alt={alt} />
          <CardTitle className="font-light text-center">{title}</CardTitle>
        </CardContent>
      </Card>
    </>
  );
}

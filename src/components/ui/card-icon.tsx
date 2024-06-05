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
  description: string;
  alt: string;
  imgSrc: StaticImageData;
};

export default function CardIcon({
  imgSrc,
  alt,
  title,
  description,
}: CardIconProps) {
  return (
    <>
      <Card className=" backdrop-blur-sm bg-[#0000001A] text-white transition duration-300 hover:scale-110">
        <CardContent className="flex items-center justify-center flex-col  py-5  ">
          <Image src={imgSrc} alt={alt} />
          <CardTitle className="font-bold text-2xl text-center">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-white text-center font-bold">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}

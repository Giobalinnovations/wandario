import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { bgImgPhotography, cardIcon1 } from '@/lib/images';
import Image, { StaticImageData } from 'next/image';

type CardIconProps = {
  title: string;
  alt: string;
  imgSrc: StaticImageData;
};

export default function CardIcon({ imgSrc, alt, title }: CardIconProps) {
  return (
    <>
      <Card className="bg-slate-600 flex flex-col items-center justify-center  px-4 py-4 gap-2 text-center w-2/3 text-white]">
        <Image src={imgSrc} alt={alt} />
        <CardTitle>{title}</CardTitle>
      </Card>
    </>
  );
}

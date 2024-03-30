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
      <Card className="bg-slate-600 flex flex-col px-[20px] py-[10px] items-center justify-center gap-2 text-center  text-white]">
        <Image src={imgSrc} alt={alt} />
        <CardTitle className="font-light">{title}</CardTitle>
      </Card>
    </>
  );
}

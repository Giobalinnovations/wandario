import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import { Button } from './button';

type CardBlogProps = {
  title: string;
  description: string;
  date?: string;
  alt: string;
  bgImgSrc: StaticImageData;
};

export default function CardImgBlog2({
  title,
  description,
  date,
  bgImgSrc,
  alt,
}: CardBlogProps) {
  return (
    <>
      <Card className="relative overflow-hidden text-white rounded-[40px] ">
        <Image src={bgImgSrc} alt={alt} className="object-cover" />
        <CardContent className="absolute bottom-0  left-0 flex flex-col gap-2 pt-20">
          <span className="pt-96">{date}</span>
          <CardTitle className="font-[800] text-2xl">
            <h1>{title}</h1>
          </CardTitle>
          <CardDescription className="text-white">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}

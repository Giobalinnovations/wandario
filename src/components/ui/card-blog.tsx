import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import { Button } from './button';
import BgImage from './bg-image';

type CardBlogProps = {
  title: string;
  description: string;
  date: string;
  continentsTitle?: string;
  alt: string;
  imgSrc: StaticImageData;
};

export default function CardBlog({
  title,
  description,
  date,
  continentsTitle,
  imgSrc,
  alt,
}: CardBlogProps) {
  return (
    <>
      <Card className="relative overflow-hidden bg-transparent rounded-[50px] text-white h-full">
        <BgImage bgImg={imgSrc} alt={alt} />
        <CardContent className="flex flex-col  justify-end border h-full">
          <CardTitle className="flex flex-col gap-1">
            <div>
              <h1>{title}</h1>
              <div className="border-b-[3px]  border-[#008ebe] w-[200px] my-2"></div>
            </div>
          </CardTitle>
          <CardDescription className="text-white font-thin line-clamp-3">
            {description}
            <span>{date}</span>
            <div>
              <Button
                variant="outline"
                className="bg-inherit rounded-[60px] text-xs font-thin"
              >
                Read More
              </Button>
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}

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
      <Card className=" relative h-full rounded-[50px] text-white bg-slate-800">
        <div className="">
          <Image src={imgSrc} alt={alt} />
        </div>

        {/* <div className="absolute right-0  text-7xl rotate-90 bottom-[50%] top-[50%] m-auto translate-y-2/4  text-red-500 z-50">
          <div className="outline-title text-w pb-2 text-5xl font-bold">
            {continentsTitle}
          </div>
        </div> */}
        <CardTitle className="flex flex-col gap-1 absolute  bottom-6 left-4">
          <div>
            <h1>{title}</h1>
            <div className="border-b-[3px]  border-[#008ebe] w-[200px] my-2"></div>
          </div>
          <CardDescription className="text-white font-thin line-clamp-3">
            {description}
          </CardDescription>
          <span>{date}</span>
          <div>
            <Button
              variant="outline"
              className="bg-inherit rounded-[60px] text-xs font-thin"
            >
              Read More
            </Button>
          </div>
        </CardTitle>
      </Card>
      <div></div>
    </>
  );
}

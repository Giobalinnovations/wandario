import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image, { StaticImageData } from 'next/image';

type MapCardProps = {
  title: string;
  alt: string;
  imgSrc: StaticImageData;
};

export default function MapCard({ imgSrc, title, alt }: MapCardProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 my-5 w-full">
        <Card className="border-none h-full  flex items-center justify-center w-full py-2 px-2  ">
          <Image src={imgSrc} alt={alt} className="" />
        </Card>
        <div className="font-bold">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
}

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
      <div className="flex flex-col gap-3 h-full">
        <Card className="border-none h-full">
          <CardContent className="flex items-center justify-center py-5">
            <div className="relative overflow-hidden">
              <Image src={imgSrc} alt={alt} className="object-cover" />
            </div>
          </CardContent>
        </Card>
        <div className="font-bold">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
}

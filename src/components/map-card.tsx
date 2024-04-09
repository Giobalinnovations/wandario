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
      <div>
        <Card className="py-2 px-2 flex justify-center items-center w-[160px] h-[160px]">
          <Image src={imgSrc} alt={alt} className="object-cover" />
        </Card>
        <div className="font-bold text-center mt-3">
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
}

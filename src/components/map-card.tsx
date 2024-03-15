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
    <Card className="shadow-none border-none font-bold">
      <CardContent>
        <Image src={imgSrc} alt={alt} />
        <p>{title}</p>
      </CardContent>
    </Card>
  );
}

import {
  Card,
  CardDescription,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

type CardCitiesProps = {
  description: string;

  CountriesName: string;
  imgSrc: StaticImageData;
  alt: string;
};
export default function CardCities({
  CountriesName,
  description,

  imgSrc,
  alt,
}: CardCitiesProps) {
  return (
    <>
      <Card className="w-full relative rounded-[50px]  text-white ">
        <Image src={imgSrc} alt={alt} className="h-full object-cover w-full" />
        <CardContent className="absolute bottom-0 left-0">
          <CardTitle className="text-[26px] font-[600]  text-white">
            {CountriesName}
          </CardTitle>
          <CardDescription className="text-[14px] mb-2  text-white">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}

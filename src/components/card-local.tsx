import {
  Card,
  CardDescription,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

type CardlocalProps = {
  description: string;

  title: string;
  imgSrc: StaticImageData;
  alt: string;
};
export default function Cardlocal({
  title,
  description,

  imgSrc,
  alt,
}: CardlocalProps) {
  return (
    <>
      <Card className=" relative rounded-[50px]  text-white">
        <Image src={imgSrc} alt={alt} className="h-full " />
        <CardContent className="absolute bottom-0 left-0">
          <CardTitle className="text-[26px] font-[600]  text-white">
            {title}
            <div className="border-b-[3px]  border-[#008ebe] w-[50px] my-2"></div>
          </CardTitle>
          <CardDescription className="text-[14px] mb-2  text-white">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}

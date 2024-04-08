import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import { locationhotelIcon, starIcon } from '@/lib/images';
import { Button } from './ui/button';

type CardEquipmentProps = {
  title: string;
  description: string;
  alt: string;
  btn: string;
  imgSrc: StaticImageData;
  ratingScore: string;
};

export default function CardEquipment({
  imgSrc,
  alt,
  description,
  ratingScore,
  btn,
  title,
}: CardEquipmentProps) {
  return (
    <>
      <Card className="rounded-[40px] ">
        <div className="">
          <Image src={imgSrc} alt={alt} className="object-cover w-full" />
        </div>
        <CardContent className="flex flex-col gap-2">
          <CardTitle className="text-[20px]">{title}</CardTitle>
          <div className="flex items-center justify-center gap-2">
            <Image src={starIcon} alt={'Star Icon'} />
            <Image src={starIcon} alt={'Star Icon'} />
            <Image src={starIcon} alt={'Star Icon'} />
            <Image src={starIcon} alt={'Star Icon'} />
            <Image src={starIcon} alt={'Star Icon'} />
            <h1 className="text-[14px] font-[500] text-[#008ebe]">
              {ratingScore}
            </h1>
          </div>
          <CardDescription className="text-[14px] italic font-[400]">
            {description}
          </CardDescription>
          <div>
            <Button
              variant="outline"
              className="rounded-[100px] bg-transparent text-[#008ebe] border-[#008ebe]"
            >
              {btn}
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

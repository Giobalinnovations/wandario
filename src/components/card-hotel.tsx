import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import { locationhotelIcon, starIcon } from '@/lib/images';

type CardHotelProps = {
  title: string;
  description: string;
  alt: string;

  imgSrc: StaticImageData;
  subrating: string;
  ratingScore: string;
};

export default function CardHotel({
  imgSrc,
  alt,
  description,
  subrating,
  ratingScore,

  title,
}: CardHotelProps) {
  return (
    <>
      <Card className="rounded-[30px]">
        <div className="relative">
          <Image src={imgSrc} alt={alt} className="object-cover w-full" />
          <div className="absolute text-white py-1 bg-[#00000099] left-0 w-full bottom-0 gap-3 flex justify-center items-center">
            <div className="">
              <Image
                src={locationhotelIcon}
                alt={'location icon'}
                width={16}
                height={20}
              />
            </div>
            <CardTitle className="font-[600] text-[18px] t ">{title}</CardTitle>
          </div>
        </div>
        <CardContent className=" mt-3">
          <div className="flex gap-2">
            <Image src={starIcon} alt={'Star Icon'} />
            <Image src={starIcon} alt={'Star Icon'} />
            <Image src={starIcon} alt={'Star Icon'} />
            <Image src={starIcon} alt={'Star Icon'} />
            <Image src={starIcon} alt={'Star Icon'} />
          </div>
          <CardDescription className="text-[14px] italic font-[400]">
            {description}
          </CardDescription>
          <h6 className="text-[10px] font-[600] mt-2">{subrating}</h6>
          <h1 className="text-[22px] font-[600] text-[#008ebe]">
            {ratingScore}
          </h1>
        </CardContent>
      </Card>
    </>
  );
}

import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { GoStarFill } from 'react-icons/go';
import { ImLocation } from 'react-icons/im';
type CardResortProps = {
  title: string;
  description?: string;
  alt: string;
  imgSrc: StaticImageData;
  ratingScore: string;
  locationName?: string;
};

export default function CardResort({
  imgSrc,
  alt,
  description,
  ratingScore,
  title,
  locationName,
}: CardResortProps) {
  return (
    <>
      <Card className="rounded-[50px] ">
        <div className="relative ">
          <Image src={imgSrc} alt={alt} className="object-cover w-full" />
          {locationName && (
            <div className="absolute left-7 bottom-16 flex items-center gap-2 font-semibold">
              <ImLocation className="text-[#FF4155] text-2xl" />
              <h1 className="text-lg text-white">{locationName}</h1>
            </div>
          )}
        </div>
        <CardContent className="flex flex-col gap-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex items-center gap-2 text-yellow-300">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
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
              className="rounded-[100px] bg-transparent text-[#008ebe] hover:bg-[#008ebe] hover:text-white border-[#008ebe]"
            >
              Make Visit
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

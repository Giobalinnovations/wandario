import Image, { StaticImageData } from 'next/image';
import BgImage from './bg-image';
import { Card, CardDescription, CardTitle } from './card';
import RotateText from './rotate-text';

type LocalCuisnesCardProps = {
  title: string;
  imgSrc: StaticImageData;
  alt: string;
  description: string;
  link: string;
};

export default function LocalCuisinesCard({
  title,
  imgSrc,
  alt,
  description,
  link,
}: LocalCuisnesCardProps) {
  return (
    <>
      <Card className="rounded-[20px] p-0 relative overflow-hidden ">
        <div className="relative h-[500px]">
          <Image src={imgSrc} alt={alt} className="object-cover" fill />
        </div>
        <div className="absolute p-10 bottom-0 left-0 w-full h-full border flex items-end justify-end text-white z-10 ">
          <RotateText title={title} />
        </div>
        {/* <CardTitle>
          <h1 className="text-[90px] ">{title}</h1>
          <div className="border-b-[3px]   border-[#008ebe] w-[90px] my-2"></div>
        </CardTitle> */}
      </Card>
    </>
  );
}

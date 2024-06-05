import Image, { StaticImageData } from 'next/image';
import BgImage from './bg-image';
import { Card, CardDescription, CardTitle } from './card';
import RotateText from './rotate-text';
import LinkButton from './link-button';

type LocalCuisnesCardProps = {
  title: string;
  imgSrc: StaticImageData;
  alt: string;
  description: string;
};

export default function LocalCuisinesCard({
  title,
  imgSrc,
  alt,
  description,
}: LocalCuisnesCardProps) {
  return (
    <>
      <Card className="rounded-[20px] p-0 m-3 relative overflow-hidden   cursor-pointer group transition duration-500 hover:scale-105 ">
        <div className="bg-gradient-to-b from-transparent to-black absolute top-0 left-0 h-full w-full bg-opacity-50 z-[1]"></div>
        <div className="relative rounded-[20px] h-[500px]">
          <Image
            src={imgSrc}
            alt={alt}
            className="object-cover rounded-[20px]"
            fill
          />
        </div>
        <div className="absolute p-10 bottom-0  left-0 w-full h-full border flex items-end justify-end text-white z-10 group-hover:hidden">
          <RotateText title={title} />
        </div>
        <div className="absolute bottom-7 z-10 left-3 hidden group-hover:flex flex-col items-start gap-2 px-2">
          <p className="text-white overflow-hidden">{description}</p>
          <LinkButton href="/#" text="Read More" className="text-white" />
        </div>
      </Card>
    </>
  );
}

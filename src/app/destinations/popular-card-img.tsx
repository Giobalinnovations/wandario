import { Card, CardTitle } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

type PopularCardImgProps = {
  title: string;
  imgSrc: StaticImageData;
  alt: string;
};

export default function PopularCardImg({
  title,
  imgSrc,
  alt,
}: PopularCardImgProps) {
  return (
    <>
      <div className="relative ">
        <Image src={imgSrc} alt={alt} />

        <div className="absolute bottom-10  text-white left-0  text-[32px] mx-auto flex flex-col  items-center w-full ">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
}

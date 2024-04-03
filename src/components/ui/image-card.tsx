import Image, { StaticImageData } from 'next/image';

type ImageCardProps = {
  imgSrc: StaticImageData;
  alt: string;
};

export default function ImageCard({ imgSrc, alt }: ImageCardProps) {
  return (
    <>
      <div className="w-[760px] h-[710px]">
        <Image src={imgSrc} alt={alt} />
      </div>
    </>
  );
}

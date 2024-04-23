import Image, { StaticImageData } from 'next/image';

type ImageCardProps = {
  imgSrc: StaticImageData;
  alt: string;
};

export default function ImageCard({ imgSrc, alt }: ImageCardProps) {
  return (
    <>
      <div className="relative overflow-hidden w-full">
        <Image src={imgSrc} alt={alt} className="object-cover" />
      </div>
    </>
  );
}

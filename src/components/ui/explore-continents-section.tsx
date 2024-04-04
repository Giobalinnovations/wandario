import Image, { StaticImageData } from 'next/image';

type ExploreContinentsSectionProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imgSrc: StaticImageData;
  imgSrc2: StaticImageData;
  alt: string;
};

export default function ExploreContinentsSection({
  title,
  paragraph1,
  paragraph2,
  imgSrc,
  imgSrc2,
  alt,
}: ExploreContinentsSectionProps) {
  return (
    <>
      <div className="flex gap-5 justify-center ">
        <div className="flex flex-col gap-2 basis-[43%] overflow-hidden ">
          <div>
            <h2 className="font-bold text-3xl">{title}</h2>
            <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
          </div>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>

        <div className="flex gap-4 ">
          <Image src={imgSrc} alt={alt} className="mb-28" />
          <Image src={imgSrc2} alt={alt} className="mt-28" />
        </div>
      </div>
    </>
  );
}

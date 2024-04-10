import Image, { StaticImageData } from 'next/image';

type ContinentsTitleImageProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
};

export default function ContinentsTitleImage({
  title,
  paragraph1,
  paragraph2,
}: ContinentsTitleImageProps) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <div>
          <h2 className="font-bold text-3xl">{title}</h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[200px] my-2"></div>
        </div>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
    </>
  );
}

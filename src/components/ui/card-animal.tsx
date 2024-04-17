import { FaCalendarDays } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';

type CardAnimalProps = {
  title: string;
  paragraph: string;
  date: string;
  time: string;
  comments: string;
  imgSrc: StaticImageData;
};
export default function CardAnimal({
  imgSrc,
  title,
  paragraph,
  date,
  time,
  comments,
}: CardAnimalProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <Image src={imgSrc} alt="animal" className="object-cover" />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-extrabold">{title}</h1>
          <p>{paragraph}</p>
          <div className="border-b-[3px]  border-[#008ebe] w-full my-2"></div>
          <div className="flex italic gap-3 items-center">
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 text-[#008ebe] rounded-[8px] border bg-white flex justify-center items-center">
                <FaCalendarDays className="" />
              </div>
              {date}
            </span>
            <span className="flex items-center gap-2">
              <div className="w-7 text-[#008ebe] h-7 rounded-[8px] border bg-white flex justify-center items-center">
                <FaClock />
              </div>
              {time}
            </span>
            <span className="flex items-center gap-2">
              <div className="w-7 text-[#008ebe] h-7 rounded-[8px] border bg-white flex justify-center items-center">
                <FaComment />
              </div>

              {comments}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

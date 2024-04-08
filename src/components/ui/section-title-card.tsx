import React from 'react';
import { Button } from './button';
import { title } from 'process';
import { BiParagraph } from 'react-icons/bi';

type SectionTitleCardProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
};

export default function SectionTitleCard({
  title,
  paragraph1,
  paragraph2,
}: SectionTitleCardProps) {
  return (
    <>
      <div className="flex flex-col gap-2 h-[200px] ">
        <div>
          <h2 className="font-bold text-3xl">{title}</h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[20%] my-2"></div>
        </div>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <div>
          <Button
            variant="outline"
            className="border-[#008ebe] bg-transparent text-[#008ebe]"
          >
            Know More
          </Button>
        </div>
      </div>
    </>
  );
}

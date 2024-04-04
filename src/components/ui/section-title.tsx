import React from 'react';

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className=" w-4/6	 text-center  text-3xl font-bold">{title}</h2>

        <div className="border-b-[3px]  border-[#008ebe] w-[190px] my-2"></div>
      </div>
    </>
  );
}

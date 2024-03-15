import React from 'react';

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className=" w-4/6	 text-center mx-auto text-3xl font-bold">
          {title}
        </h2>

        <div className="border-b-4  border-[#008ebe] w-3/12 my-2"></div>
      </div>
    </>
  );
}

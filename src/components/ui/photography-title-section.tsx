import React from 'react';
import { Button } from './button';
import Image from 'next/image';

export default function PhotographyTitleSection() {
  return (
    <>
      <div className="flex justify-between  ">
        <div className="basis-[41%]">
          <h2 className="text-3xl font-bold ">Photography</h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[20%] my-2"></div>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
          </p>
        </div>
        <div className="self-end">
          <Button variant="outline" className="bg-inherit">
            Know More
          </Button>
        </div>
      </div>
    </>
  );
}

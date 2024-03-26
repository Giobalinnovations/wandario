import React from 'react';
import { Button } from './button';
import { title } from 'process';
import { BiParagraph } from 'react-icons/bi';

type AboutSectionTitleProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
};

export default function AboutSectionTitle({
  title,
  paragraph1,
  paragraph2,
}: AboutSectionTitleProps) {
  return (
    <>
      <div
        className="flex
      flex-col gap-2 "
      >
        <h2 className="font-bold text-3xl">{title}</h2>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <div>
          <Button variant="outline">Know More</Button>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Button } from './button';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import LinkButton from './link-button';
import { title } from 'process';
import TitleUnderline from './title-underline';

export default function PhotographyTitleSection() {
  return (
    <>
      <div className="flex flex-col gap-5 lg:flex-row justify-between">
        <div className="max-w-lg">
          <TitleUnderline title="Photography" className="text-white" />
          <p>
            {`Tourists can travel back in time with photographs. Filming them on camera lets us relive the experiences and enjoy them all over again. A camera is an excellent travel partner, particularly when travelling alone. When uploaded on social media platforms like Instagram and Facebook, these images not only tell a story but also show the distinct splendour and exhilaration of each tour. Photographs are the best means for us to recall the amazing times we’ve encountered on our journeys.`}
          </p>
        </div>
        <div className="self-end">
          <LinkButton href="/destinations" text="Know More" />
        </div>
      </div>
    </>
  );
}

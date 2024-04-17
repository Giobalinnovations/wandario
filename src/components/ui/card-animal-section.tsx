import React from 'react';
import CardAnimal from './card-animal';
import { cardAnimalImg1, cardAnimalImg2, cardAnimalImg3 } from '@/lib/images';
import AsidebarBlog from './asidebar-blog';

export default function CardAnimalSection() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col gap-6">
          <CardAnimal
            imgSrc={cardAnimalImg1}
            title="Meet The Animals Of Lion King In Real Life"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="dd/mm/yyyy"
            time="00/00 am"
            comments="Comments (12)"
          />
          <CardAnimal
            imgSrc={cardAnimalImg2}
            title="Discover The Hidden Gem"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="dd/mm/yyyy"
            time="00/00 am"
            comments="Comments (12)"
          />
          <CardAnimal
            imgSrc={cardAnimalImg3}
            title="Your Ultimate Travel Guide To Canada"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="dd/mm/yyyy"
            time="00/00 am"
            comments="Comments (12)"
          />
          <CardAnimal
            imgSrc={cardAnimalImg1}
            title="Your Ultimate Travel Guide To Canada"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="dd/mm/yyyy"
            time="00/00 am"
            comments="Comments (12)"
          />
          <CardAnimal
            imgSrc={cardAnimalImg2}
            title="Discover The Hidden Gem"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="dd/mm/yyyy"
            time="00/00 am"
            comments="Comments (12)"
          />
        </div>
        <AsidebarBlog />
      </div>
    </>
  );
}

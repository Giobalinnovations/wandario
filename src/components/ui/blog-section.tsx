import { Button } from './button';
import CardBlog from './card-blog';

import React from 'react';
import Image from 'next/image';
import { cardBlog1, cardBlog2, cardBlog3, cardBlog4 } from '@/lib/images';

export default function BlogSection() {
  return (
    <>
      <div>
        <div className="flex items-center mb-7 flex-col">
          <h1 className="font-bold text-[32px]">News & Blogs</h1>
          <div className="border-b-[3px]   border-[#008ebe] w-[90px] my-2"></div>
        </div>

        <div className="flex gap-3 flex-col  md:flex-row">
          <div className="w-full flex h-[450px] md:min-h-[450px]">
            <CardBlog
              imgSrc={cardBlog1}
              alt="card blog image1"
              title="Card 1"
              description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry's standard
dummy text ever since the 1500s, when
an unknown printer took a galley"
              date="February 9, 2024"
              continentsTitle="ASIA"
            />
          </div>

          <div className="w-full h-[450px] md:h-auto">
            <CardBlog
              imgSrc={cardBlog2}
              alt="card blog image1"
              title="Card 2"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
              date="February 9, 2024"
              continentsTitle="Europe"
            />
          </div>
          {/* card 3-4 */}
          <div className="flex flex-col gap-2 h-[450px] md:h-auto">
            <CardBlog
              imgSrc={cardBlog3}
              alt="card blog image1"
              title="Card 3"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley"
              date="February 9, 2024"
              continentsTitle="Africa"
            />
            <CardBlog
              imgSrc={cardBlog4}
              alt="card blog image1"
              title="Card 4"
              description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry's standard
dummy text ever since the 1500s, when
an unknown printer took a galley"
              date="February 9, 2024"
              continentsTitle="SOUTH
AMERICA"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-[10px]">
        <Button variant="outline">View All Blogs</Button>
      </div>
    </>
  );
}

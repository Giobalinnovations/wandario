import CardBlog from './card-blog';

import React from 'react';

export default function BlogSection() {
  return (
    <>
      <div className="flex  gap-3">
        <CardBlog
          title="Card 1"
          description="Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry's standard
dummy text ever since the 1500s, when
an unknown printer took a galley"
          date="February 9, 2024"
          continentsTitle="ASIA"
        />

        <CardBlog
          title="Card 2"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
          date="February 9, 2024"
          continentsTitle="Europe"
        />
        <div
          className="flex flex-col gap-3
        "
        >
          <CardBlog
            title="Card 3"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley"
            date="February 9, 2024"
            continentsTitle="Africa"
          />
          <CardBlog
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
    </>
  );
}

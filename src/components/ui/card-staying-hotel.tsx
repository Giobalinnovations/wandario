import { Button } from './button';
import CardBlog from './card-blog';

import React from 'react';
import Image from 'next/image';
import {
  cardBlog1,
  cardBlog2,
  cardBlog3,
  cardBlog4,
  cardStayingImg1,
  cardStayingImg2,
  cardStayingImg3,
  cardStayingImg4,
  cardStayingImg5,
} from '@/lib/images';

export default function CardStayingHotel() {
  return (
    <>
      <div className="flex items-center mb-7 flex-col">
        <h1 className="font-bold text-[32px]">
          What Staying In Hostels Looks Like
        </h1>
        <div className="border-b-[3px]   border-[#008ebe] w-[220px] my-2"></div>
      </div>

      <div className="flex flex-col gap-3 ">
        <div className=" flex flex-col md:flex-row md:min-h-[450px] gap-3 ">
          <div className="md:w-2/5 ">
            <CardBlog
              imgSrc={cardStayingImg1}
              alt="Card Staying Img 1"
              title="Common Living Areas"
              description="Hostels often have dormitory-style accommodations, so you’ll most likely be sharing a room with other travellers. Bunk beds are widespread, and rooms in bigger hostels may have anything from two to twenty beds."
              date="February 9, 2024"
            />
          </div>

          <div className="md:min-h-[450px] md:w-3/5">
            <CardBlog
              imgSrc={cardStayingImg2}
              alt="card blog image1"
              title="The Atmosphere of the Community"
              description="Hostels generate a feeling of belonging. Kitchens, lounges, and gaming roomsare examples of common spaces that foster interaction. It’s fairly uncommonfor the hostel staff to organise group events, trips, or social evenings."
            />
          </div>
        </div>
        {/* card 3-4-5 */}
        <div className="flex flex-col md:flex-row md:min-h-[450px] gap-3">
          <div className="md:w-4/12 lg:w-2/12">
            <CardBlog
              imgSrc={cardStayingImg3}
              alt="Card Staying Img 3"
              title="Cost-effective"
              description="The undeniable affordability of hostels is one of their main attractions. Staying at a hostel may save travellers a substantial amount of money when compared to hotels, particularly in high-cost countries."
            />
          </div>
          <div className="md:w-4/12 lg:w-6/12">
            <CardBlog
              imgSrc={cardStayingImg4}
              alt="Card Staying Img 4"
              title="Diverse Amenities"
              description="The services at a hostel might vary from free Wi-Fi, complimentary breakfast, and secure lockers to laundry facilities, tour reservations, and even swimming pools or rooftop patios. Check to see what is included in your stay."
            />
          </div>
          <div className="md:w-4/12 lg:w-4/12">
            <CardBlog
              imgSrc={cardStayingImg5}
              alt="Card Staying Img 5"
              title="Exchange of Cultures"
              description="Hostels draw a wide range of travellers from all over the globe. This is a once- in-a-lifetime chance for cultural interaction, exchanging travel memories, and maybe establishing lifelong friends from many backgrounds and nations."
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

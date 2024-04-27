'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import TripPlanningCard from './trip-planning-card';
import {
  itinerariesIcon,
  todosIcon,
  toStayIcon,
  whatEatIcon,
} from '@/lib/images';

export default function TripPlanningSection() {
  return (
    <>
      <div>
        <div className="mb-6">
          <h2 className="font-bold text-3xl">Trip Planning</h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[140px] my-2"></div>
          <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        </div>
      </div>

      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <TripPlanningCard
              imgSrc={itinerariesIcon}
              alt="Itineraries Icon"
              title="Itineraries"
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specim-en book.`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TripPlanningCard
              imgSrc={todosIcon}
              alt="To Dos Icon"
              title="To Do’s"
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specim-en book.`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TripPlanningCard
              imgSrc={whatEatIcon}
              alt="What To Eat? Icon"
              title="What To Eat?"
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specim-en book.`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TripPlanningCard
              imgSrc={toStayIcon}
              alt="To Stay Icon"
              title="To Stay"
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim-en book.`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import TripPlanningCard from './trip-planning-card';
import { trips } from '@/lib/data';

export default function TripPlanningSection() {
  return (
    <>
      <div>
        <div className="mb-6">
          <h2 className="font-bold text-3xl">Trip Planning</h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[140px] my-2"></div>
          <>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</>
        </div>
      </div>

      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay
          spaceBetween={10}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            580: {
              slidesPerView: 2,
            },

            1000: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {trips.map((trip, index) => (
            <SwiperSlide key={index}>
              <TripPlanningCard
                title={trip.title}
                imgSrc={trip.imgSrc}
                alt={trip.alt}
                description={trip.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

'use client';
import { cardCuisineImg1 } from '@/lib/images';
import LocalCuisinesCard from './local-cuisnes-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function LocalCuisnesSection() {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {Array.from({ length: 4 }, (_, index) => (
            <SwiperSlide key={index}>
              <LocalCuisinesCard
                title="ASIA"
                imgSrc={cardCuisineImg1}
                alt="card cuisne 1"
                description="Lorem Ipsum is simply dummy text of the printing and"
                link="#"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

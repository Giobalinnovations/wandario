'use client';
import {
  cardCuisineImg1,
  cardCuisineImg2,
  cardCuisineImg3,
  cardCuisineImg4,
} from '@/lib/images';
import LocalCuisinesCard from './local-cuisnes-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function LocalCuisnesSection() {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
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
          }}
        >
          <div>
            <SwiperSlide>
              <LocalCuisinesCard
                title="ASIA"
                imgSrc={cardCuisineImg1}
                alt="card cuisne 1"
                description="Lorem Ipsum is simply dummy text of the printing and"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LocalCuisinesCard
                title="ASIA"
                imgSrc={cardCuisineImg2}
                alt="card cuisne 1"
                description="Lorem Ipsum is simply dummy text of the printing and"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LocalCuisinesCard
                title="ASIA"
                imgSrc={cardCuisineImg3}
                alt="card cuisne 1"
                description="Lorem Ipsum is simply dummy text of the printing and"
              />
            </SwiperSlide>
            <SwiperSlide>
              <LocalCuisinesCard
                title="ASIA"
                imgSrc={cardCuisineImg4}
                alt="card cuisne 1"
                description="Lorem Ipsum is simply dummy text of the printing and"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}

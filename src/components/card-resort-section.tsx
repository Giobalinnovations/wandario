'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { cardResorts } from '@/lib/data';
import TitleDescription from './title-description';
import CardResort from './card-resort';

export default function CardResortSection() {
  return (
    <>
      <div>
        <TitleDescription
          title={'Resorts To Stay'}
          description={`Travel has evolved from luxury to self-discovery, with resorts becoming gateways to unique experiences and cultural immersion. ‘Resorts to Stay’ offers a selection of the world’s finest resorts, offering relaxation, adventure, and luxury in unforgettable destinations.`}
        />
      </div>
      <div className="">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay
          spaceBetween={5}
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
          {cardResorts.map((resort, index) => (
            <SwiperSlide key={index}>
              <CardResort {...resort} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

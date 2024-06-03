'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import CardHotel from './card-hotel';
import SectionTitle from './ui/section-title';
import { cardHotels } from '@/lib/data';

export default function CardHotelSection() {
  return (
    <>
      <SectionTitle title={'Our Best Accommodation'} />
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
              slidesPerView: 4,
            },
          }}
        >
          {cardHotels.map((hotels, index) => (
            <SwiperSlide key={index}>
              <CardHotel {...hotels} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

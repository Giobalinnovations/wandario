'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { image1, image2 } from '@/lib/images';
import CardImg from './ui/card-img';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
export default function HeroSlider() {
  return (
    <div className="w-full relative">
      {' '}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay
        spaceBetween={5}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <CardImg imgSrc={image1} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <CardImg imgSrc={image2} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <CardImg imgSrc={image1} alt="Image 1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

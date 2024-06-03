'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Cardlocal from '@/components/card-local';
import { cardsFood } from '@/lib/data';
import SectionTitle from '@/components/ui/section-title';

export default function CardFoodSection() {
  return (
    <>
      <SectionTitle title={'Local Cuisines Of Canada'} />
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

            800: {
              slidesPerView: 3,
            },

            1000: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {cardsFood.map((food, index) => (
            <SwiperSlide key={index}>
              <Cardlocal {...food} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

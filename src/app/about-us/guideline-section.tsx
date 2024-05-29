'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import GuidelineCard from './guideline-card';
import { guideCardImg1, guideCardImg2, guideCardImg3 } from '@/lib/images';
import { guidelines } from '@/lib/data';

export default function GuidelineSection() {
  return (
    <>
      <div className="flex items-center mb-7 flex-col">
        <h1 className="font-bold text-[32px]">Our Guidelines</h1>
        <div className="border-b-[3px]   border-[#008ebe] w-[90px] my-2"></div>
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
          {guidelines.map((guideline, index) => (
            <SwiperSlide key={index}>
              <GuidelineCard
                subtitle={guideline.subtitle}
                imgSrc={guideline.imgSrc}
                title={guideline.title}
                alt={guideline.alt}
                description={guideline.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

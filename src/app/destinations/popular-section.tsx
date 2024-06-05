'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import PopularCardImg from './popular-card-img';
import { popularBackgroundImg } from '@/lib/images';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { populars } from '@/lib/data';
import BgImage from '@/components/ui/bg-image';
import SectionTitle from '@/components/ui/section-title';

export default function PopularSection() {
  return (
    <>
      <div className="relative h-full   border-red-400">
        <BgImage
          bgImg={popularBackgroundImg}
          alt="photography"
          className="object-cover h-full rounded-[30px] "
        />

        <div className="p-5">
          <div className="">
            <SectionTitle
              title="Popular Destinations"
              className="text-white text-center"
            />
            <div>
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay
                spaceBetween={1}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                  580: {
                    slidesPerView: 2,
                  },

                  700: {
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
                {populars.map((popular, index) => (
                  <SwiperSlide className="m-auto " key={index}>
                    <PopularCardImg
                      title={popular.title}
                      imgSrc={popular.imgSrc}
                      alt={popular.alt}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

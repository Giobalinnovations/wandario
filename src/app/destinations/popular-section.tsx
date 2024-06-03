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

export default function PopularSection() {
  return (
    <>
      <Card className="relative rounded-[50px] invisible sm-[742px]:visible">
        <div className=" ">
          <Image
            src={popularBackgroundImg}
            alt=""
            className="object-cover h-full"
          />
        </div>
        <div className=" absolute top-0 flex flex-col mt-7 items-center w-full z-10 ">
          <h2 className="font-bold text-3xl text-white">
            Popular Destinations
          </h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
        </div>
        <div className="sm:flex absolute overflow-hidden z-50 visible bottom-0 left-0 right-0  ">
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
      </Card>
    </>
  );
}

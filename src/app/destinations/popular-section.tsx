'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import PopularCardImg from './popular-card-img';
import {
  icelandCardImg,
  indonesiaCardImg,
  japanCardImg,
  philippinesCardImg,
  popularBackgroundImg,
} from '@/lib/images';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function PopularSection() {
  return (
    <>
      <Card className="relative rounded-[50px] ">
        <div className="absolute bottom-0  left-0">
          <Image src={popularBackgroundImg} alt="" />
        </div>
        <div className="absolute -top-28 flex flex-col items-center w-full z-10 ">
          <h2 className="font-bold text-3xl text-white">
            Popular Destinations
          </h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
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
          >
            <SwiperSlide>
              <PopularCardImg
                title="Philippines"
                imgSrc={philippinesCardImg}
                alt="Philippines Image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PopularCardImg title="Japan" imgSrc={japanCardImg} alt="Japan" />
            </SwiperSlide>
            <SwiperSlide>
              <PopularCardImg
                title="Iceland"
                imgSrc={icelandCardImg}
                alt="Iceland"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PopularCardImg
                title="Indonesia"
                imgSrc={indonesiaCardImg}
                alt="Indonesia"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Card>
    </>
  );
}

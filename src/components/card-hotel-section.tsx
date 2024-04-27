'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import CardHotel from './card-hotel';
import { cardHotel1, cardHotel2, cardHotel3, cardHotel4 } from '@/lib/images';
import SectionTitle from './ui/section-title';

export default function CardHotelSection() {
  return (
    <>
      <SectionTitle title={'Our Best Accommodation'} />
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            {' '}
            <CardHotel
              imgSrc={cardHotel1}
              title={'Peals Hotel & Suites'}
              alt={'Peals Hotel & Suites'}
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
              subrating={'Expert Ratings'}
              ratingScore={'9.4'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHotel
              imgSrc={cardHotel2}
              title={'Fairmont Banff Spring'}
              alt={'Peals Hotel & Suites'}
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
              subrating={'Expert Ratings'}
              ratingScore={'9.4'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHotel
              imgSrc={cardHotel3}
              title={'Rimrock'}
              alt={'Peals Hotel & Suites'}
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
              subrating={'Expert Ratings'}
              ratingScore={'9.4'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardHotel
              imgSrc={cardHotel4}
              title={'The Malcolm Hotel'}
              alt={'Peals Hotel & Suites'}
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
              subrating={'Expert Ratings'}
              ratingScore={'9.4'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

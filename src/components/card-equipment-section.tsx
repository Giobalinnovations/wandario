'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import CardEquipment from './card-equipment';
import { equipmentImg } from '@/lib/images';
import EquimentTopTitle from './equiment-top-title';

export default function CardEquipmentSection() {
  return (
    <>
      <div>
        <EquimentTopTitle
          title={'Best Photography Equipments'}
          description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        />
      </div>

      <div className="grid  grid-cols-1  sm:grid-cols-2 justify-center gap-5 items-center lg:grid-cols-4"></div>
      <div className="">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay
          spaceBetween={30}
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
          <SwiperSlide>
            <CardEquipment
              imgSrc={equipmentImg}
              alt={'Image 1'}
              title={'Equipment 1'}
              description={'Wifi / Swimming Pool / Dinning'}
              ratingScore={'4.5 ratings'}
              btn={'Read More'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardEquipment
              imgSrc={equipmentImg}
              alt={'Image 1'}
              title={'Equipment 2'}
              description={'Wifi / Swimming Pool / Dinning'}
              ratingScore={'4.5 ratings'}
              btn={'Read More'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardEquipment
              imgSrc={equipmentImg}
              alt={'Image 1'}
              title={'Equipment 3'}
              description={'Wifi / Swimming Pool / Dinning'}
              ratingScore={'4.5 ratings'}
              btn={'Read More'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardEquipment
              imgSrc={equipmentImg}
              alt={'Image 1'}
              title={'Equipment 4'}
              description={'Wifi / Swimming Pool / Dinning'}
              ratingScore={'4.5 ratings'}
              btn={'Read More'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

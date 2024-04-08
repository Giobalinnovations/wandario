import React from 'react';
import CardEquipment from './card-equipment';
import { equipmentImg } from '@/lib/images';
import { title } from 'process';
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

      <div className="grid  grid-cols-1  sm:grid-cols-2 justify-center gap-5 items-center lg:grid-cols-4">
        <CardEquipment
          imgSrc={equipmentImg}
          alt={'Image 1'}
          title={'Equipment 1'}
          description={'Wifi / Swimming Pool / Dinning'}
          ratingScore={'4.5 ratings'}
          btn={'Read More'}
        />

        <CardEquipment
          imgSrc={equipmentImg}
          alt={'Image 1'}
          title={'Equipment 2'}
          description={'Wifi / Swimming Pool / Dinning'}
          ratingScore={'4.5 ratings'}
          btn={'Read More'}
        />
        <CardEquipment
          imgSrc={equipmentImg}
          alt={'Image 1'}
          title={'Equipment 3'}
          description={'Wifi / Swimming Pool / Dinning'}
          ratingScore={'4.5 ratings'}
          btn={'Read More'}
        />
        <CardEquipment
          imgSrc={equipmentImg}
          alt={'Image 1'}
          title={'Equipment 4'}
          description={'Wifi / Swimming Pool / Dinning'}
          ratingScore={'4.5 ratings'}
          btn={'Read More'}
        />
      </div>
    </>
  );
}

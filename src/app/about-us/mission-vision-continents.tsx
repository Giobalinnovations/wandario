import Image from 'next/image';
import React from 'react';

import { missionImg } from '@/lib/images';
import MissionVision from './mission-section';
import MissionVisionTitle from './mission-section';
import VisionSection from './vision-section';
import MissionSection from './mission-section';

export default function MissionVisionContinents() {
  return (
    <>
      <section>
        <div>
          <MissionSection
            title="Our Mission"
            paragraph1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            paragraph2={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
            imgSrc={missionImg}
            alt="Mission Image"
          />
        </div>

        <div>
          <VisionSection
            title="Our Vision"
            paragraph1={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            paragraph2={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
            imgSrc={missionImg}
            alt="Vision Image"
          />
        </div>
      </section>
    </>
  );
}

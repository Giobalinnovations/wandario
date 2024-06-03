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
            paragraph={`At Travel Reviews Guide, our goal is to give real, up-to-date, and detailed information to globe trotters worldwide, so that every trip is informed and memorable. We aim to reveal the soul of each place, its distinctive personality, and its hidden gems. We additionally desire to help travellers connect with people from other countries worldwide.`}
            imgSrc={missionImg}
            alt="Mission Image"
          />
        </div>

        <div>
          <VisionSection
            paragraph={`We foresee a world in which travel is more than simply getting from one point to another and is more of a holistic experience. A world in which travellers, armed with accurate knowledge, may fully immerse themselves, walk gently on the planet, and have a good impact on local communities. We hope to unite cultures, create knowledge, and add to a more ecologically friendly and peaceful global community via the power of intelligent travel.`}
            imgSrc={missionImg}
            alt="Vision Image"
          />
        </div>
      </section>
    </>
  );
}

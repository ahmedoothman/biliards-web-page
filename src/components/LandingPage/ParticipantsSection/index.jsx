import React from 'react';
import SectionHeader from '../../common/SectionHeader';
import SectionCard from '../../common/SectionCard';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ParticipantCard from './components/ParticipantCard';

const participants = [
  'Participant Name',
  'Participant Name',
  'Participant Name',
  'Participant Name',
  'Participant Name',
  'Participant Name',
  'Participant Name',
];

export default function ParticipantsSection() {
  const { t } = useTranslation();

  return (
    <SectionCard>
      <SectionHeader title={t('participantsSection.title')} />
      <div style={{ marginTop: '20px' }}>
        <Swiper
          spaceBetween={20}
          navigation
          modules={[Navigation]}
          className='mySwiper'
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {participants.map((name, index) => (
            <SwiperSlide key={index}>
              <ParticipantCard data={{ name }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionCard>
  );
}

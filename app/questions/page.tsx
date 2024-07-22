'use client';
import Image from 'next/image'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { images } from '@/lib/images'

const Questions = () => {
  return (
    <section>
      
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper"
    >
       
          <SwiperSlide className='swiper-slide'> Slide 1 </SwiperSlide>
          <SwiperSlide> Slide 2 </SwiperSlide>
          <SwiperSlide> Slide 3 </SwiperSlide>
          <SwiperSlide> Slide 4 </SwiperSlide>
          
        
      </Swiper>
      
    </section>
  )
}

export default Questions
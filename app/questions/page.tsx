"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Questions = () => {
  return (
    <section>
      <Swiper
        spaceBetween={80}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide"> Slide 1 </SwiperSlide>
        <SwiperSlide> Slide 2 </SwiperSlide>
        <SwiperSlide> Slide 3 </SwiperSlide>
        <SwiperSlide> Slide 4 </SwiperSlide>
        <SwiperSlide> Slide 5 </SwiperSlide>
        <SwiperSlide> Slide 6 </SwiperSlide>
        <SwiperSlide> Slide 7 </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Questions;

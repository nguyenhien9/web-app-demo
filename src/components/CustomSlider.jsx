import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const CustomSlider = ({ images }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{ clickable: true }}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image.id}>
            <img src={image.img} alt="" className="h-full object-cover" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CustomSlider;

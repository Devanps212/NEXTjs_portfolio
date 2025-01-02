import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

const Slider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    pagination={{clickable: true}}
    navigation
    spaceBetween={50}
    slidesPerView={5}>
      <SwiperSlide>

      </SwiperSlide>
    </Swiper>
  )
}

export default Slider

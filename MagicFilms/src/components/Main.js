import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


 const Main = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper main"
      >
        <SwiperSlide><img src="https://kinotut.me/uploads//dle_filter/2024-01/1704864368_skachat-filmy-2024.jpg" alt="slide"/></SwiperSlide>
        <SwiperSlide><img src="https://pbs.twimg.com/media/GImF7uyW8AANw3Q.jpg" alt="slide"/></SwiperSlide>
        <SwiperSlide><img src="https://selfcreation.ru/wp-content/uploads/2017/04/pageglavn-1000x480.jpg " alt="slide"/></SwiperSlide>
        <SwiperSlide><img src="https://www.whats-on-netflix.com/wp-content/uploads/2024/02/netflix-top-10-report-through-my-window-avatar-the-last-airbender-mea-culpa.jpg " alt="slide"/></SwiperSlide>
      </Swiper>

      </>
  )
}


export default Main
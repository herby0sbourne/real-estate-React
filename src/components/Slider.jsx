import React from 'react';
import {Navigation, Pagination, EffectFade, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


// import 'swiper/css';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';
// import 'swiper/css/autoplay';

const Slider = ({images}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      autoplay
      effect="fade"
      navigation
      pagination={{type: "progressbar"}}
      style={{height: '300px'}}
    >
      {
        images.map((image) => {
          return <SwiperSlide>
            <img src={image} alt="" style={{height: '300px'}}/>
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default Slider;

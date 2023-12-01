// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Zoom, Navigation } from "swiper/modules";

import bannerImageOne from "../../../src/assets/images/Banner/tourcover.jpg"
import bannerImageTwo from "../../../src/assets/images/Banner/tourcover-2.jpg"
import bannerImageThree from "../../../src/assets/images/Banner/tourcover-3.jpg"
import bannerImageFour from "../../../src/assets/images/Banner/tourcover-6.jpg"




const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        zoom={true}
        navigation={true}
        modules={[Autoplay, Zoom, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide><img className="w-full " src={bannerImageOne} alt="bannerImage" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={bannerImageTwo} alt="bannerImage" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={bannerImageThree} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full" src={bannerImageFour} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;






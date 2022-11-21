// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Banner01 from './Intro.png';
// import Banner02 from './Banner02.png';
// import Banner03 from './Banner03.png';
// import BannerSwipeStyle from './BannerSwipe.module.css';
// export default function BannerSwipe() {
//   return (
//     <div className={BannerSwipeStyle.swiper}>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         onSlideChange={() => console.log('slide change')}
//         onSwiper={(swiper) => console.log(swiper)}
//       >
//         <SwiperSlide>
//           <img src={Banner01} alt="Banner01" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Banner02} alt="Banner02" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Banner03} alt="Banner03" />
//         </SwiperSlide>
//       </Swiper>
//     </div>

//   );
// };    
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
// import "swiper/css"; //basic
// import "swiper/css/navigation";
// import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);
export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        768: {
          slidesPerView: 7,
        },
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
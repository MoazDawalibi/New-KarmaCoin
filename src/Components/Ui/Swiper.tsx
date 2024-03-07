import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import CardProductSwiper from './CardProductSwiper';
import { TProduct } from '../../Layout/app/Types';


interface CardSwiperProps {
  data: TProduct[];
}

const CardSwiper: React.FC<CardSwiperProps> = ({ data }) => {
  return (
    <div className='CardSwiper'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}

        breakpoints={{
          260: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          435: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          380: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          570: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween:10,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
          data?.map((itemSwiper:TProduct,index:number)=>{
            return(
              <SwiperSlide key={index}><CardProductSwiper itemSwiper={itemSwiper} /></SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  );
}

export default CardSwiper;

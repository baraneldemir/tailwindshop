import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { RxHeart } from "react-icons/rx";
import men1 from './images/men1.png'
import women1 from './images/women1.png'
import women2 from './images/women2.png'
import women3 from './images/women3.png'
import women4 from './images/women4.png'
import bej from './images/bejkiyafet.png'
import bej2 from './images/beyazkiyafet.png'
import bej3 from './images/clothes.png'
import bej4 from './images/girlplant.png'
import bej5 from './images/global.png'
import bej6 from './images/kiyafet.png'
import bej7 from './images/kiyafet3.png'
import bej8 from './images/mountains.png'
import bej9 from './images/World.png'
import bej10 from './images/worldreal.png'

export default function Carousel() {

    const slides = [
        {
          title: "Product Brown",
          content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
          backgroundImage: women1 ,
        },
        {
          title: "Product Red",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: women2,
        },
        {
          title: "Product Brown",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: bej6,
        },
        {
          title: "Product Yellow",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: bej5,
        },
        {
          title: "Product White",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: women3,
        },
        {
          title: "Product Black",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: bej2,
        },
    ];

  return (
    <div className="mb-20 flex items-center justify-center flex-col h-[350px] lg:h-[500px] bg-emerald-50">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex-col gap-6 group relative shadow-lg mb-10 text-emerald-600  px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[370px] md:mt-5 overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})`}}
              />
              {/* <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" /> */}
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-sm ">{item.title} </h1>
                {/* <p className="lg:text-[18px]">{item.content} </p> */}
              </div>
              <RxHeart className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-red-700 group-hover:rotate-180 duration-700" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            color: white; /* Set arrow color to white */
            width: 30px; /* Adjust width */
            height: 30px; /* Adjust height */
          }
        `}
      </style>
    </div>
  );
}

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";
import { RxHeart } from "react-icons/rx";

export default function Carousel() {

    const slides = [
        {
          title: "Product Brown",
          content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
          backgroundImage: "https://i.imgur.com/wKDxRBG.png",
        },
        {
          title: "Product Red",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: "https://i.imgur.com/wKDxRBG.png",
        },
        {
          title: "Design",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: "https://i.imgur.com/wKDxRBG.png",
        },
        {
          title: "Seo",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage:"https://i.imgur.com/wKDxRBG.png",
        },
        {
          title: "Management",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: "https://i.imgur.com/wKDxRBG.png",
        },
        {
          title: "Production",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          backgroundImage: "https://i.imgur.com/wKDxRBG.png",
        },
    ];

  return (
    <div className="mb-20 flex items-center justify-center flex-col h-[400px] bg-emerald-50">
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
        navigation={false}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex-col gap-6 group relative shadow-lg mb-10 text-black  px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              {/* <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" /> */}
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                {/* <p className="lg:text-[18px]">{item.content} </p> */}
              </div>
              <RxHeart className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-emerald-200 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useState, useMemo } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { RxHeart } from "react-icons/rx";
import { Link } from 'react-router-dom';

import reflect1 from '../images/reflect1.png'
import reflect2 from '../images/reflect2.png'
import reflect3 from '../images/reflect3.png'
import reflect4 from '../images/reflect4.png'
import reflect5 from '../images/reflect5.png'
import reflect6 from '../images/reflect6.png'


export default function Carousel() {
  const navigate = useNavigate();
  const [shuffledSlides, setShuffledSlides] = useState([]);


  // Function to handle navigation and scroll action
  const handleNavigation = () => {
    // Navigate to the desired route
    navigate('/planthoodie');

    // Delay the scroll to top action to prevent glitch
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scroll
      });
    }, 200); // Delay time in milliseconds
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // Optional: adds smooth scrolling
    });
  }
  


  const slides = useMemo(() => [
    { title: "Product Brown", backgroundImage: reflect2 },
    { title: "Product Red", backgroundImage: reflect1 },
    { title: "Product Black", backgroundImage: reflect3 },
    { title: "Product Yellow", backgroundImage: reflect4 },
    { title: "Product White", backgroundImage: reflect5 },
    { title: "Product Gray", backgroundImage: reflect6 },
  ], []);
  

  useEffect(() => {
    const shuffleArray = (array) => {
      return array
        .map((item) => ({ ...item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((item) => ({ title: item.title, content: item.content, backgroundImage: item.backgroundImage }));
    };

    setShuffledSlides(shuffleArray(slides));
  }, [slides]);

  return (
    <div className="mb-20 flex items-center justify-center flex-col h-[350px] lg:h-[500px] bg-white">
      <Swiper
        loop={true}
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
          onTouchStart: true
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {shuffledSlides.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex-col gap-6 relative shadow-lg mb-10 text-gray-300 rounded-lg px-3 py-3 h-[250px] w-[170px] lg:h-[400px] lg:w-[370px] md:mt-5 overflow-hidden ">
              <div 
                className="absolute inset-0 z-0 transition-all duration-300 bg-center bg-cover rounded-lg hover:scale-110"
                style={{ backgroundImage: `url(${item.backgroundImage})`}}
              />
              {/* <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" /> */}
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl font-extrabold lg:text-sm ">{item.title} </h1>
                {/* <p className="lg:text-[18px]">{item.content} </p> */}
              </div>
              <Link onTouchStart={scrollToTop} onClick={handleNavigation}  onTouchEnd={handleNavigation} to="/planthoodie"><RxHeart className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white hover:text-red-700 hover:rotate-180 duration-700 cursor-pointer" /></Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            color: white;
            width: 30px; 
            height: 30px;
          }
        `}
      </style>
    </div>
  );
}

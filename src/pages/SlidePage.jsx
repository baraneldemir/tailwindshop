import React from 'react';

import reflect1 from '../images/reflect1.png';
import reflect2 from '../images/reflect2.png';
import reflect3 from '../images/reflect3.png';
import reflect4 from '../images/reflect4.png';
import reflect5 from '../images/reflect5.png';

import reflect6 from '../images/reflect6.png';
import { Link } from 'react-router-dom';


import './HomePage.css'; // Keep this for custom animations
import useAnimateOnScroll from '../hooks/AnimateOnScroll';
import Carousel from '../components/Carousel';

export default function SlidePage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useAnimateOnScroll();

  return (
    <div>
    <div className="grid w-full grid-cols-1 -mt-40 md:-mt-60 md:grid-cols-2">
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full shrinkAnimated" alt="..." src={reflect5} loading='eager' />
        <h1 className="absolute text-2xl text-white translate-x-1/2 bottom-10 right-1/2">Clothes</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={reflect2} />
        <h1 className="absolute text-2xl text-green-800 translate-x-1/2 bottom-10 right-1/2">Hoodies</h1>
        <h1 className="absolute z-20 text-3xl text-black translate-x-1/2 -bottom-5 right-1/2">Plant Trees</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={reflect3} />
        <h1 className="absolute text-2xl text-green-800 translate-x-1/2 bottom-10 right-1/2">Outdoor</h1>
        <h1 className="absolute z-20 text-3xl text-black translate-x-1/2 -bottom-5 right-1/2">Up To You</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={reflect4} />
        <h1 className="absolute text-2xl text-green-800 translate-x-1/2 bottom-10 right-1/2">Accessories</h1>
        <h1 className="absolute z-10 text-3xl text-black translate-x-1/2 -bottom-5 right-1/2">Future</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={reflect1} />
        <h1 className="absolute text-2xl text-green-800 translate-x-1/2 bottom-10 right-1/2">Underwear</h1>
        <h1 className="absolute z-20 text-3xl text-black translate-x-1/2 -bottom-5 right-1/2">In Our Hands</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={reflect6} />
        <h1 className="absolute text-2xl text-green-800 translate-x-1/2 bottom-10 right-1/2">Home</h1>
      </Link>
      
    </div>
      <h1 className='m-5 text-2xl text-center '>Plant trees as you buy</h1>
      <Carousel/>
      <h1 className='m-5 text-2xl text-center '>Discounted Products</h1>
      <Carousel/>
    </div>
  );
}

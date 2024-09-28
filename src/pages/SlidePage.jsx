import React from 'react';
import women1 from '../images/women1.png';
import women2 from '../images/women2.png';
import women3 from '../images/women3.png';
import women4 from '../images/women4.png';
import women5 from '../images/women5.png';
import women6 from '../images/women6.png';
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
    <div className="grid w-full grid-cols-1 -mt-40 md:-mt-60 md:grid-cols-2">
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={women1} />
        <h1 className="absolute text-2xl text-white translate-x-1/2 bottom-10 right-1/2">Clothes</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={women2} />
        <h1 className="absolute text-2xl text-white translate-x-1/2 bottom-10 right-1/2">Hoodies</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={women3} />
        <h1 className="absolute text-2xl text-white translate-x-1/2 bottom-10 right-1/2">Outdoor</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={women4} />
        <h1 className="absolute text-2xl text-white translate-x-1/2 bottom-10 right-1/2">Accessories</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={women5} />
        <h1 className="absolute text-2xl text-white translate-x-1/2 bottom-10 right-1/2">Underwear</h1>
      </Link>
      <Link onClick={scrollToTop} to="/planthoodie" className="relative">
        <img className="object-cover w-full h-full notShrinkAnimated" alt="..." src={women6} />
        <h1 className="absolute text-2xl text-white translate-x-1/2 bottom-10 right-1/2">Home</h1>
      </Link>
      <h1 className='m-5 text-2xl '>Today's Products</h1>
      <Carousel/>
      <h1 className='m-5 text-2xl '>Discounted Products</h1>
      <Carousel/>
    </div>
  );
}

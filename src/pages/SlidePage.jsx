import React from 'react';
import women1 from '../images/women1.png';
import women2 from '../images/women2.png';
import women3 from '../images/women3.png';
import women4 from '../images/women4.png';
import women5 from '../images/women5.png';
import women6 from '../images/women6.png';
import women7 from '../images/women7.png';
import women8 from '../images/women8.png';

import './HomePage.css'; // Keep this for custom animations
import useAnimateOnScroll from '../hooks/AnimateOnScroll';

export default function SlidePage() {
  useAnimateOnScroll();

  return (
    <div className='flex flex-wrap justify-center -mt-40 md:flex-row md:-mt-60'>
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women1} />
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women2} />
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women3} />
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women4} />
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women5} />
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women6} />
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women7} />
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women8} />
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women1} />
      <img className=' notShrinkAnimated sm:w-1/3 md:w-1/4 lg:w-1/5' alt='...' src={women2} />
    </div>
  );
}


import women1 from '../images/women1.png';
import women2 from '../images/women2.png';
import women3 from '../images/women3.png';
import women4 from '../images/women4.png';
import women5 from '../images/women5.png';
import women6 from '../images/women6.png';
import women7 from '../images/women7.png';
import women8 from '../images/women8.png';

import './HomePage.css'

import useShrinkAnimateOnScroll from '../hooks/ShrinkAnimateOnScroll';
export default function SlidePage() {
useShrinkAnimateOnScroll()

  return (
    <div className='w-full -mt-40 md:flex md:flex-row md:-mt-60'>
      <img className='notShrinkAnimated' alt='...' src={women1} />
      <img className='notShrinkAnimated' alt='...' src={women2} />
      <img className='notShrinkAnimated' alt='...' src={women3} />
      <img className='notShrinkAnimated' alt='...' src={women4} />
      <img className='notShrinkAnimated' alt='...' src={women5} />
      <img className='notShrinkAnimated' alt='...' src={women6} />
      <img className='notShrinkAnimated' alt='...' src={women7} />
      <img className='notShrinkAnimated' alt='...' src={women8} />
    </div>
  );
}

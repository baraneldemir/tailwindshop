// useAnimateOnScroll.js
import { useEffect } from 'react';

export default function useAnimateOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the shrinking animation class when the element is in view
          if (entry.target.classList.contains('notShrinkAnimated')) {
            entry.target.classList.add('shrinkAnimated');
          }
        } else {
          // Remove the shrinking animation class when the element is out of view
          if (entry.target.classList.contains('shrinkAnimated')) {
            entry.target.classList.remove('shrinkAnimated');
            entry.target.classList.add('notShrinkAnimated'); // Reset the scale
          }
        }
      });
    });

    // Select elements with the shrink animation class
    const notAnimatedElements = document.querySelectorAll('.notShrinkAnimated');
    notAnimatedElements.forEach((el) => observer.observe(el));

    // Cleanup function to disconnect the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);
}

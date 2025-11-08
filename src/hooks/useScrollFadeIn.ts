import { useEffect, useRef, useState } from 'react';

interface UseScrollFadeInOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollFadeIn = (options: UseScrollFadeInOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once element has faded in, remove observer
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return {
    ref: elementRef,
    isVisible,
    className: `fade-in ${isVisible ? 'is-visible' : ''}`,
  };
};
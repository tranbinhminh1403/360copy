// src/components/common/AnimatedSection.tsx
import React from 'react';
import useIntersectionObserver from '../../../hooks';

const getAnimationStyles = (type: string, isVisible: boolean) => {
  const animations = {
    'fade-up': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
    },
    'fade-down': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(-80px)',
    },
    'fade-left': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(-80px)',
    },
    'fade-right': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(80px)',
    },
    'zoom-in': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.8)',
    },
  };
  
  return animations[type as keyof typeof animations] || animations['fade-up'];
};

const AnimatedSection = ({ children, animation = 'fade-up' }: { children: React.ReactNode, animation?: string }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.05,
    rootMargin: '50px',
  });

  const animationStyles = getAnimationStyles(animation, isVisible as boolean);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        ...animationStyles,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
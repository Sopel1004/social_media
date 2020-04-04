import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import LoadingIcon from '../styles/Loading';

const Loading = () => {
  const loading = useRef(null);

  useEffect(() => {
    const [elements] = loading.current.children;
    const circle1 = elements.getElementById('circle1');
    const circle2 = elements.getElementById('circle2');
    const circle3 = elements.getElementById('circle3');
    gsap.set([circle1, circle2, circle3], { transformOrigin: '50% 50%' });

    gsap.fromTo(
      circle1,
      {
        rotation: 0,
      },
      {
        rotation: 360,
        repeat: -1,
        duration: 1,
        ease: 'linear',
      }
    );
    gsap.fromTo(
      circle2,
      {
        rotation: 0,
      },
      {
        rotation: -360,
        repeat: -1,
        duration: 0.6,
        ease: 'linear',
      }
    );
    gsap.fromTo(
      circle3,
      {
        rotation: 0,
      },
      {
        rotation: 360,
        repeat: -1,
        duration: 0.3,
        ease: 'linear',
      }
    );
  });

  return (
    <div ref={loading}>
      <LoadingIcon />
    </div>
  );
};

export default Loading;

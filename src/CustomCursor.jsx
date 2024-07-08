import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;

        cursorOutlineRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: 'forwards' }
        );
      }
    };

    const handleMouseEnter = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.width = 'var(--cursor-dot-size-hover)';
        cursorDotRef.current.style.height = 'var(--cursor-dot-size-hover)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.width = 'var(--cursor-dot-size)';
        cursorDotRef.current.style.height = 'var(--cursor-dot-size)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, NavLink, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, NavLink, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  });
  

  return (
    <>
      <div ref={cursorDotRef} className='cursor-dot dark:bg-white' data-cursor-dot></div>
      <div ref={cursorOutlineRef} className='cursor-outline dark:border-white' data-cursor-outline></div>
    </>
  );
};

export default CustomCursor;

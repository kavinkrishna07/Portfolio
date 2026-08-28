import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, [data-interactive="true"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient glow ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${pos.x - (isHovered ? 24 : 16)}px, ${pos.y - (isHovered ? 24 : 16)}px, 0)`,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
        }}
      >
        <div className={`w-full h-full rounded-full border transition-all duration-200 ${
          isHovered
            ? 'border-amber-400/60 bg-amber-400/10 scale-110 shadow-[0_0_15px_rgba(229,193,88,0.3)]'
            : 'border-white/20 bg-white/5'
        }`} />
      </div>

      {/* Inner tiny dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50"
        style={{
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
          width: '6px',
          height: '6px',
        }}
      >
        <div className={`w-full h-full rounded-full transition-colors duration-200 ${
          isHovered ? 'bg-amber-300' : 'bg-white/80'
        }`} />
      </div>
    </>
  );
}

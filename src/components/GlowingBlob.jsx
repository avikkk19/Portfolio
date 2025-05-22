import { useMousePosition } from '../hooks/useMousePosition';
import { useState, useEffect, useRef } from 'react';

const GlowingBlob = ({ targetId }) => {
  const { x, y } = useMousePosition();
  const [isMouseOverTarget, setIsMouseOverTarget] = useState(false);
  const [hasMovedEnough, setHasMovedEnough] = useState(false);
  const initialMousePosition = useRef({ x: 0, y: 0 });
  const cumulativeDistance = useRef(0);

  useEffect(() => {
    const targetElement = document.getElementById(targetId);
    
    const handleMouseEnter = (e) => {
      setIsMouseOverTarget(true);
      initialMousePosition.current = { x: e.clientX, y: e.clientY };
      cumulativeDistance.current = 0;
      setHasMovedEnough(false);
    };
    
    const handleMouseLeave = () => {
      setIsMouseOverTarget(false);
      setHasMovedEnough(false);
      cumulativeDistance.current = 0;
    };

    const handleMouseMove = (e) => {
      if (isMouseOverTarget && !hasMovedEnough) {
        const currentX = e.clientX;
        const currentY = e.clientY;
        const dx = currentX - initialMousePosition.current.x;
        const dy = currentY - initialMousePosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        cumulativeDistance.current += distance;
        initialMousePosition.current = { x: currentX, y: currentY };

        if (cumulativeDistance.current >= 100) {
          setHasMovedEnough(true);
        }
      }
    };

    if (targetElement) {
      targetElement.addEventListener('mouseenter', handleMouseEnter);
      targetElement.addEventListener('mouseleave', handleMouseLeave);
      targetElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (targetElement) {
        targetElement.removeEventListener('mouseenter', handleMouseEnter);
        targetElement.removeEventListener('mouseleave', handleMouseLeave);
        targetElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [targetId, isMouseOverTarget, hasMovedEnough]);

  const blobOpacity = isMouseOverTarget && hasMovedEnough ? 1 : 0;

  return (
    <div
      style={{
        position: 'fixed',
        width: '300px',
        height: '300px',
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        borderRadius: '50%',
        left: x - 150,
        top: y - 150,
        pointerEvents: 'none',
        filter: 'blur(40px)',
        mixBlendMode: 'screen',
        opacity: blobOpacity,
        transition: 'opacity 0.5s ease-in-out'
      }}
    />
  );
};

export default GlowingBlob; 
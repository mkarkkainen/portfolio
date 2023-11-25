// Import React, useRef, useEffect
import React, { useRef, useEffect } from 'react';

// Import useMousePosition from '@/util/mouse'; // Make sure this path is correct
// If it's not working, consider using a standard import or fixing the path.

interface ParticlesProps {
  className?: string;
  ease?: number;
  quantity?: number;
  refresh?: boolean;
  staticity?: number;
}

const remapValue = (
  value: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number
): number => {
  const remapped =
    ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
  return remapped > 0 ? remapped : 0;
};

const Particles: React.FC<ParticlesProps> = ({
  className = '',
  quantity = 900,
  staticity = 90,
  ease = 50,
  refresh = false,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ h: number; w: number }>({ h: 0, w: 0 });
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  const circles = useRef<Array<Circle>>([]);

  useEffect(() => {
    const context = canvasRef.current?.getContext('2d');

    const initCanvas = () => {
      resizeCanvas();
      drawParticles();
    };

    const animate = () => {
      clearContext();
      updateCircles();
      requestAnimationFrame(animate);
    };

    const onMouseMove = () => {
      updateMousePosition();
    };

    initCanvas();
    animate();
    window.addEventListener('resize', initCanvas);

    return () => {
      window.removeEventListener('resize', initCanvas);
    };
  }, [refresh]);

  useEffect(() => {
    onMouseMove();
  }, [mouse.x, mouse.y]);

  const updateMousePosition = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = mousePosition.x - rect.left - w / 2;
      const y = mousePosition.y - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  };

  const resizeCanvas = () => {
    if (
      canvasContainerRef.current &&
      canvasRef.current &&
      canvasRef.current.getContext('2d')
    ) {
      circles.current = [];
      const { offsetWidth, offsetHeight } = canvasContainerRef.current;
      canvasSize.current.w = offsetWidth;
      canvasSize.current.h = offsetHeight;
      canvasRef.current.width = offsetWidth * dpr;
      canvasRef.current.height = offsetHeight * dpr;
      canvasRef.current.style.width = `${offsetWidth}px`;
      canvasRef.current.style.height = `${offsetHeight}px`;
      canvasRef.current.getContext('2d')?.scale(dpr, dpr);
    }
  };

  const circleParams = (): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = 1 + Math.floor(Math.random() * 2) + 0.1;
    const alpha = 1;
    const targetAlpha = Number.parseFloat(
      (Math.random() * 0.6 + 0.1).toFixed(1)
    );
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 8;
    return {
      alpha,
      dx,
      dy,
      magnetism,
      size,
      targetAlpha,
      translateX,
      translateY,
      x,
      y,
    };
  };

  const drawCircle = (circle: Circle, update = false) => {
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.translate(translateX, translateY);
      context.beginPath();
      context.arc(x, y, size, 0, 2 * Math.PI);
      context.fillStyle = `rgba(255, 55, 255, ${alpha})`;
      context.fill();
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  const clearContext = () => {
    const context = canvasRef.current?.getContext('2d');
    if (context) {
      context.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    }
  };

  const drawParticles = () => {
    clearContext();
    const particleCount = quantity;
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  const updateCircles = () => {
    clearContext();
    circles.current.forEach((circle: Circle, i: number) => {
      // Your animation logic here...
      drawCircle(
        {
          ...circle,
          alpha: circle.alpha,
          translateX: circle.translateX,
          translateY: circle.translateY,
          x: circle.x,
          y: circle.y,
        },
        true
      );
    });
  };

  return (
    <div aria-hidden='true' className={className} ref={canvasContainerRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Particles;

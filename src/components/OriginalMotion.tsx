import React, { useEffect, useState, useRef } from 'react';

export const OriginalPreloader: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      setTimeout(() => setRemoved(true), 600);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  if (removed) return null;

  return (
    <div className={`preloader ${hidden ? 'preloader-hidden' : ''}`} aria-hidden={hidden}>
      <div className="loading-container">
        <div className="loading" />
        <div id="loading-icon">
          <svg className="w-8 h-8 text-[#c4121a]" viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 4L4 12v16l16 8 16-8V12L20 4zm0 4.2L31.8 14 20 19.8 8.2 14 20 8.2zM7 16.5l11.5 5.8v11.4L7 27.9V16.5zm24.5 11.4l-11.5 5.8V22.3l11.5-5.8v11.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const OriginalMagicCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ballX = -100;
    let ballY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('.cursor-pointer') ||
        target?.closest('input')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const loop = () => {
      // Small ball snaps fast
      ballX += (mouseX - ballX) * 0.45;
      ballY += (mouseY - ballY) * 0.45;
      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${ballX}px, ${ballY}px, 0)`;
      }

      // Outer ring follows with smooth easing
      cursorX += (mouseX - cursorX) * 0.16;
      cursorY += (mouseY - cursorY) * 0.16;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        id="magic-cursor"
        ref={cursorRef}
        className={`hidden md:block ${isHovering ? 'hovering' : ''}`}
      />
      <div id="ball" ref={ballRef} className="hidden md:block" />
    </>
  );
};

export const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({
  end,
  duration = 2000,
  suffix = '+',
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const startTime = performance.now();

          const update = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * end));
            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export const AnimateOnScroll: React.FC<{
  animation: 'fadeInUp' | 'fadeInLeft' | 'fadeInDown' | 'zoomIn' | 'rotateInDownLeft' | 'rotateInDownRight' | 'fadeIn';
  delay?: number;
  className?: string;
  children: React.ReactNode;
}> = ({ animation, delay = 0, className = '', children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        animationDelay: `${delay}ms`,
        visibility: isVisible ? 'visible' : 'hidden',
      }}
      className={`${className} ${isVisible ? `animated ${animation}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export const ParallaxGraphic: React.FC<{
  src: string;
  speed?: number;
  className?: string;
  alt?: string;
}> = ({ src, speed = 0.15, className = '', alt = '' }) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrolled = (viewportHeight / 2 - rect.top) * speed;
        setOffsetY(scrolled);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      style={{ transform: `translate3d(0, ${offsetY}px, 0)` }}
      className={`transition-transform duration-100 ease-out will-change-transform ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};

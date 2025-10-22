import { useEffect, useRef, useState } from 'react';
import './BlurText.scss'

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  threshold = 0.1,
  rootMargin = '0px',
  stepDuration = 0.35
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((segment, index) => (
        <span
          className={`inline-block blur-text-item ${inView ? 'animate' : ''}`}
          key={index}
          style={{
            animationDelay: `${(index * delay) / 1000}s`,
            animationDuration: `${stepDuration * 2}s`,
            animationFillMode: 'forwards'
          }}
        >
          {segment === ' ' ? '\u00A0' : segment}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </span>
      ))}
    </p>
  );
};

export default BlurText;

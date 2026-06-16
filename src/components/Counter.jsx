import { useState, useEffect, useRef } from "react";

function Counter({ end, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false); // ensures it only runs once

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Start only when 30% of the number is visible, and only once
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            let startTime = null;
            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              // easeOut: fast start, smooth finish
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * end));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end); // snap to exact final value
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect(); // cleanup
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default Counter;
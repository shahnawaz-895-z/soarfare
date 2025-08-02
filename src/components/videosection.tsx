"use client";
import { useEffect, useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            video.play().catch((e) => console.error("Video play failed", e));
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.5 } // play when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <video
  ref={videoRef}
  className="relative top-0 left-0 w-full h-full object-fill"
  src="/WhatsApp Video 2025-07-28 at 16.50.10_7db1428e.mp4"
  loop
  muted
  playsInline
/>

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        
      </div>
    </section>
  );
};

export default VideoSection;

"use client";
import { useEffect, useRef, useState } from "react";

const BenefitsVideoSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [zoom, setZoom] = useState(1);

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
      { threshold: 0.5 }
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

  // Zoom in/out using Ctrl + Mouse wheel
  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setZoom((prevZoom) => Math.min(Math.max(prevZoom + delta, 0.5), 2)); // limit between 0.5x and 2x
    }
  };

  return (
    <section
      ref={sectionRef}
      onWheel={handleWheel}
      style={{
        transform: `scale(${zoom})`,
        transformOrigin: "center",
        transition: "transform 0.2s ease",
      }}
      className="relative w-full h-screen overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/0731.mp4"
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        {/* Content here if needed */}
      </div>
    </section>
  );
};

export default BenefitsVideoSection;
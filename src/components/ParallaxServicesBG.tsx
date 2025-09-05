
"use client";
import React, { useRef, useEffect } from "react";

export default function ParallaxServicesBG({ children }: { children: React.ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const offset = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      videoRef.current.style.transform = `translateY(${offset * 200}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full min-h-[60vh] flex items-stretch overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover object-center opacity-70 m-0 p-0 will-change-transform scale-[1.55]"
        src="/videos/paralax2.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{ transition: 'transform 0.2s linear' }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

"use client";
import React, { useRef, useEffect } from "react";

const clients = [
  { name: "Vallourec", logo: "/images/vallourec.png" },
  { name: "Votorantim", logo: "/images/votorantim.png" },
  { name: "Vale", logo: "/images/vale.png" },
  { name: "Usiminas", logo: "/images/usiminas.png" },
  { name: "ArcelorMittal", logo: "/images/arcelormittal.png" },
  { name: "CSN", logo: "/images/csn.png" },
  { name: "Odebrecht", logo: "/images/odebrecht.png" },
  { name: "Tetra Tech", logo: "/images/tetratech.png" },
  { name: "ThyssenKrupp", logo: "/images/thyssenkrupp.png" },
];

export default function ClientsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      const speed = 1; // pixels per tick
      const interval = setInterval(() => {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += speed;
        }
      }, 16); // ~60fps
      return () => clearInterval(interval);
    }, []);

  // Duplicate the list for infinite effect
  const logos = [...clients, ...clients];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 drop-shadow-lg">Clientes que confiam na Peex</h2>
        <div
          ref={carouselRef}
          className="flex gap-28 items-center overflow-x-scroll whitespace-nowrap relative group no-scrollbar"
          style={{ scrollBehavior: "auto", WebkitOverflowScrolling: "touch", msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {logos.map((client, idx) => {
            // Ajuste de tamanho especial para Odebrecht, Vallourec, Votorantim, ThyssenKrupp
            let imgClass = "h-20 w-auto object-contain mb-2 grayscale hover:grayscale-0 transition duration-300";
            let imgStyle = { maxWidth: 180, background: "transparent" };
            if (["Odebrecht", "Vallourec", "Votorantim", "ThyssenKrupp"].includes(client.name)) {
              imgClass = "h-28 w-auto object-contain mb-2 grayscale hover:grayscale-0 transition duration-300";
              imgStyle = { maxWidth: 260, background: "transparent" };
            }
            return (
              <div key={client.name + idx} className="inline-flex flex-col items-center min-w-[180px] mx-8">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={imgClass}
                  style={imgStyle}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

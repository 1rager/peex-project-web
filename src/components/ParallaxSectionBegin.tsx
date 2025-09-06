"use client";
import React, { useRef, useEffect } from "react";

export default function ParallaxSectionBegin() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!videoRef.current || !sectionRef.current) return;
			const rect = sectionRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			// Quanto mais próximo do topo, menor o translateY
			const offset = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
	videoRef.current.style.transform = `translateY(${offset * 120}px)`;
		};
		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section ref={sectionRef} className="relative w-full min-h-[100vh] flex items-stretch overflow-hidden bg-transparent">
			<video
				ref={videoRef}
	className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover object-center opacity-70 m-0 p-0 will-change-transform scale-[1.85]"
	src="https://videos.pexels.com/video-files/9310130/9310130-uhd_2560_1440_30fps.mp4"
				autoPlay
				loop
				muted
				playsInline
				aria-hidden="true"
				style={{ transition: 'transform 0.5s linear' }}
			/>
			<div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white px-4">
				<div className="inline-block px-2 md:px-4 py-2 md:py-4">
					<h1
						className="text-5xl md:text-7xl font-extrabold mb-10 text-white tracking-tight"
						style={{
							textShadow: '0 4px 18px rgba(0,0,0,0.22), 0 1.5px 0px rgba(0,0,0,0.10)'
						}}
					>
						Engenharia de excelência
					</h1>
					<p
						className="text-xl md:text-3xl max-w-4xl mx-auto text-white font-medium mb-2 md:mb-4"
						style={{
							marginTop: '3rem',
							textShadow: '0 2px 10px rgba(0,0,0,0.18), 0 1px 0px rgba(0,0,0,0.08)'
						}}
					>
						Desenvolvemos projetos de engenharia mecânica de alta precisão para empresas líderes como Vale, Gerdau, ArcelorMittal e outras gigantes do setor industrial. Nossa equipe entrega soluções sob medida, com foco em inovação, segurança e eficiência, atendendo aos mais altos padrões do mercado nacional e internacional.
					</p>
				</div>
			</div>
		</section>
	);
}

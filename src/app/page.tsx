


import Navbar from "@/components/Navbar";
import ParallaxSectionBegin from "@/components/ParallaxSectionBegin";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsCarousel from "@/components/ClientsCarousel";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
  <main>
        <section id="inicio">
          <ParallaxSectionBegin />
        </section>
        <section id="sobre">
          <AboutSection />
        </section>
        <section id="servicos">
          <ServicesSection />
        </section>
        <section id="projetos">
          <ProjectsSection />
        </section>
        <section id="clientes">
          <ClientsCarousel />
        </section>
        <section id="contato">
          <ContactSection />
        </section>
      </main>
    </>
  );
}

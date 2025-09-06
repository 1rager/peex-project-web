
import ParallaxServicesBG from "@/components/ParallaxServicesBG";

const services = [
  {
    title: "Engenharia Mecânica",
    description:
      "Projetos industriais completos, detalhamento de máquinas, estruturas metálicas e soluções sob medida para grandes plantas.",
    icon: "🛠️",
  },
  {
    title: "Engenharia Elétrica e Automação",
    description:
      "Sistemas elétricos industriais, automação de processos e integração de tecnologias para máxima eficiência.",
    icon: "⚡",
  },
  {
    title: "Escaneamento 3D e Modelagem",
    description:
      "Levantamento a laser, modelagem 3D e digitalização de ambientes industriais para projetos brownfield.",
    icon: "📐",
  },
  {
    title: "Consultoria Multidisciplinar",
    description:
      "Apoio técnico, análise de viabilidade e soluções integradas para desafios complexos do setor industrial.",
    icon: "💡",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-gray-900">
      <ParallaxServicesBG>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">Nossas Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white/90 rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxServicesBG>
    </section>
  );
}

import React from "react";

const projects = [
  {
    title: "Vale - Expansão de Planta",
    description:
      "Projeto multidisciplinar para ampliação de unidade industrial, incluindo modelagem 3D e integração de sistemas.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Gerdau - Otimização de Processos",
    description:
      "Consultoria e automação de processos industriais, elevando a eficiência e segurança operacional.",
    image: "https://images.unsplash.com/photo-1503389152951-9c3d029fd6c1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "ArcelorMittal - Escaneamento 3D",
    description:
      "Levantamento a laser e digitalização de áreas industriais para retrofit e manutenção preditiva.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Projetos de Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl shadow-md bg-gray-50 overflow-hidden hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform hover:-translate-y-2 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

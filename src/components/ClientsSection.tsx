import React from "react";

const clients = [
  { name: "Vale", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Vale_logo.png" },
  { name: "Gerdau", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Gerdau_logo.png" },
  { name: "ArcelorMittal", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/ArcelorMittal.svg" },
  { name: "CSN", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/CSN_logo.png" },
];

export default function ClientsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Clientes que confiam na Peex</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto object-contain mb-2 bg-white rounded shadow"
                style={{ maxWidth: 120 }}
              />
              <span className="text-sm font-medium text-gray-700">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

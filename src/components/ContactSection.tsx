import React from "react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Fale com a Peex</h2>
        <p className="mb-8 text-lg text-gray-700">
          Entre em contato para orçamentos, dúvidas ou parcerias. Retornaremos o mais breve possível!
        </p>
        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Nome"
              className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Mensagem"
              className="border rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold px-8 py-3 rounded hover:bg-blue-800 transition-colors"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

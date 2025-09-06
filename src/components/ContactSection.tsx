

"use client";
import React from "react";
import dynamic from "next/dynamic";
const EmailJSForm = dynamic(() => import("./EmailJSForm"), { ssr: false });

export default function ContactSection() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Fale com a Peex</h2>
        <p className="mb-8 text-lg text-gray-700">
          Entre em contato para orçamentos, dúvidas ou parcerias. Retornaremos o mais breve possível!
        </p>
  <EmailJSForm />
      </div>
    </section>
  );
}

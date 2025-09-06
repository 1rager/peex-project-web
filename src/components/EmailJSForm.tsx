"use client";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";


export default function EmailJSForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_gcff2tm",
        "template_n5sp62i",
        form.current,
        "Yyh6C317Siya45bV9"
      )
      .then(
        () => {
          setStatus("Mensagem enviada com sucesso!");
          setShowStatus(true);
          setLoading(false);
          form.current?.reset();
          setTimeout(() => setShowStatus(false), 5000);
        },
        (error) => {
          setStatus("Erro ao enviar mensagem. Tente novamente.");
          setShowStatus(true);
          setLoading(false);
          setTimeout(() => setShowStatus(false), 5000);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          className="border rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex flex-col items-center">
        <button
          type="submit"
          className={`relative bg-blue-700 text-white font-semibold px-8 py-3 rounded transition-colors flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed ${loading ? 'bg-blue-400' : 'hover:bg-blue-800'}`}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
              Enviando...
            </span>
          ) : (
            "Enviar mensagem"
          )}
        </button>
        <div className="relative h-6 w-full flex justify-center">
          <p
            className={`absolute left-0 right-0 text-sm mt-2 text-center transition-opacity duration-700 ${showStatus ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            {status}
          </p>
        </div>
      </div>
    </form>
  );
}

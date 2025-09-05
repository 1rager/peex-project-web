import React from "react";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-bold text-xl text-blue-800">Peex Engenharia</span>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 px-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu placeholder */}
      </nav>
    </header>
  );
}

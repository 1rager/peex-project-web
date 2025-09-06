'use client';

import React, { useState } from "react";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

function smoothScrollTo(targetY: number, duration: number = 1200) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutQuad(progress));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  window.requestAnimationFrame(step);
}

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string, closeMobile?: () => void) {
  if (href.startsWith("#") && href.length > 1) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      smoothScrollTo(rect.top + scrollTop, 1200);
      if (closeMobile) closeMobile();
    }
  }
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="flex flex-col items-center justify-center">
          <span className="font-extrabold text-2xl md:text-3xl tracking-widest text-blue-800 leading-none uppercase">PEEX</span>
          <span className="text-xs md:text-sm text-blue-900 font-medium tracking-wide mt-1 text-center" style={{letterSpacing: '0.08em'}}>Projetos de engenharia</span>
        </span>
        <div className="flex items-center">
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={e => {
                    if (link.href === "#") {
                      e.preventDefault();
                      smoothScrollTo(0, 1200);
                    } else {
                      handleSmoothScroll(e, link.href);
                    }
                  }}
                  className="relative text-gray-700 hover:text-blue-700 font-medium transition-colors duration-200 px-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 focus:outline-none"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`block w-7 h-1 bg-blue-800 rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-1 bg-blue-800 rounded my-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-1 bg-blue-800 rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        {/* Mobile menu stack */}
        <div
          className={`fixed inset-0 z-50 md:hidden pointer-events-none transition-opacity duration-400 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
          style={{ background: 'rgba(0,0,0,0.60)' }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className={
              `fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl flex flex-col pt-24 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`
            }
            style={{
              transform: mobileOpen ? 'translateX(0)' : 'translateX(60px)',
              opacity: mobileOpen ? 1 : 0
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-2xl text-blue-800 shadow focus:outline-none transition-colors duration-200"
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
              type="button"
            >
              &times;
            </button>
            <ul className="flex flex-col gap-6 text-center px-4 mt-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-xl font-semibold text-blue-800 py-2 px-4 rounded hover:bg-blue-50 transition-colors duration-200"
                    onClick={e => {
                      if (link.href === "#") {
                        e.preventDefault();
                        setMobileOpen(false);
                        setTimeout(() => {
                          smoothScrollTo(0, 1200);
                        }, 10);
                      } else {
                        handleSmoothScroll(e, link.href, () => setMobileOpen(false));
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
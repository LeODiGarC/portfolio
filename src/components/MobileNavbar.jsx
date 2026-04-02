"use client";

import { useState } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

export function MobileNavbar() {
  const sections = [
    { label: "Inicio", id: "home" },
    { label: "Sobre Mí", id: "about" },
    { label: "Stack", id: "stack" },
    { label: "Proyectos", id: "projects" },
    { label: "Contacto", id: "contact" },
  ];

  const { active, setActive } = useActiveSection(
    sections.map((s) => s.id)
  );

  const [open, setOpen] = useState(false);

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full md:hidden">
      <div className="mx-3 mt-3 flex items-center justify-between px-5 py-3 rounded-2xl border-b bg-background/60 backdrop-blur-xl shadow-sm">
        <span className="font-semibold text-lg tracking-tight">
          Leonardo<span className="text-primary">.dev</span>
        </span>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-9 h-9 flex flex-col justify-center items-center gap-1.5"
        >
          <span
            className={`block h-1 w-6 bg-foreground rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-6" : ""
            }`}
          />
          <span
            className={`block h-1 w-6 bg-foreground rounded transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-6 bg-foreground rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-6" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay (click afuera cierra) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 transition-all duration-300 ${
          open
            ? "bg-black/30 backdrop-blur-sm opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-4 right-4 h-[90vh] w-3/4 max-w-sm rounded-2xl border bg-background/70 backdrop-blur-2xl shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-[120%]"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex-1 flex flex-col gap-3 mt-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavigation(section.id)}
                className={`relative text-base font-medium text-left px-4 py-3 rounded-xl transition-all duration-200 overflow-hidden ${
                  active === section.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent/40"
                }`}
              >
                {section.label}

                {/* Indicador activo */}
                {active === section.id && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-primary-foreground/70 rounded-r" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-6 border-t flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Tema
            </span>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
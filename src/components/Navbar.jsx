import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { DarkModeToggle } from "./DarkModeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const sections = [
    { label: "Inicio", id: "home" },
    { label: "Sobre Mí", id: "about" },
    { label: "Stack", id: "stack" },
    { label: "Proyectos", id: "projects" },
    { label: "Contacto", id: "contact" },
  ];

  const { active, setActive } = useActiveSection(sections.map((s) => s.id));

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id); // marcar activo inmediatamente al hacer click
  };

  return (
    <NavigationMenu className="hidden md:block fixed top-0 right-0 z-50 h-auto rounded-2xl w-auto px-4 md:px-6 py-2 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <NavigationMenuList className="flex justify-end gap-2 md:gap-5">
        {sections.map((section) => (
          <NavigationMenuItem key={section.id}>
            <NavigationMenuLink
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(section.id);
              }}
              className={`text-xs md:text-sm cursor-pointer hover:opacity-70 transition-opacity ${
                active === section.id ? "bg-accent text-accent-foreground" : ""
              }`}
            >
              {section.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <DarkModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

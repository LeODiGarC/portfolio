import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { DarkModeToggle } from "./DarkModeToggle"
import { useActiveSection } from "@/hooks/useActiveSection"


export function Navbar() {
  const sections = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  const active = useActiveSection(sections.map(s => s.id));

  const handleNavigation = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Menubar className="fixed top-0 right-0 z-50 h-auto w-auto justify-end gap-2 md:gap-5 px-4 md:px-6 py-2 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      {sections.map((section) => (
          <MenubarMenu key={section.id}>
        <MenubarTrigger
          onClick={() => handleNavigation(section.id)}
          className={`text-xs md:text-sm cursor-pointer hover:opacity-70 transition-opacity ${active === section.id ? "bg-accent text-accent-foreground" : ""}`}
        >
          {section.label}
        </MenubarTrigger>
        </MenubarMenu>
      ))}
      <DarkModeToggle />
    </Menubar>
  )
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { ThemeProvider } from "@/context/Theme/ThemeProvider";
import App from "@/App.jsx";
import { Navbar } from "@/components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <App />
    </ThemeProvider>
  </StrictMode>,
);

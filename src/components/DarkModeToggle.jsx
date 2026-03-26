import { useThemeContext } from "@/hooks/useThemeContext";

const DarkModeToggle = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`px-4 py-2 rounded-lg transition-colors 
          ${
            theme === "dark"
              ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }
        `}>
      {theme === "dark" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
};

export default DarkModeToggle;

import { useThemeContext } from "@/hooks/useThemeContext";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const { theme } = useThemeContext();

  return (
    <div
      className={
        `min-h-screen` +
        (theme === "dark" ? " bg-gray-900 text-white" : " bg-white text-black")
      }>
      <DarkModeToggle />
      <p className="text-lg">Este texto usa Source Code Pro</p>
    </div>
  );
}

export default App;

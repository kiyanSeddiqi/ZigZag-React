import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTheme(key = "theme", initValue = "light") {
  const [theme, setTheme] = useLocalStorage(key, initValue);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }
  return { theme, toggleTheme };
}

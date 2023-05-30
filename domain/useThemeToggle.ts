import { useState, useEffect } from "react";

export function useThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    document.documentElement.classList.toggle("dark");
    window.localStorage.setItem("isDarkMode", newIsDarkMode.toString());
  }

  useEffect(() => {
    const savedIsDarkMode =
      window.localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(
      savedIsDarkMode ||
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggleDarkMode,
  };
}

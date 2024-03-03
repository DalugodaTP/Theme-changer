import React, { useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

// Create a new context
export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }: any) => {

//   useState function for theme
  const [theme, setTheme] = useState<Theme>("light");

//   Function to toggle light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

// Terniary functions to change css for color before passing to DOM
  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

//  capture body and background color and pass our colors by default
  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
import React, { useContext } from "react";
import { ThemeContext } from "./components/ThemeProvider";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div>
        <div>Hello World</div>
        <button onClick={toggleTheme}>
          {/* change text based on the theme */}
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
      </div>
    </>
  );
}

export default App;

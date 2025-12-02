import React, { createContext, useContext, useEffect, useState } from "react";
import { THEMES } from "../constant/Theme";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme")
      : THEMES.LIGHT
  );

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
    console.log(localStorage.getItem("theme"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

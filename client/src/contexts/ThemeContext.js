import React, { createContext, useContext, useState, useEffect } from "react";

const themes = {
  dark: {
    backgroundColor: "black",
    textColor: "#ddd",
    hoverColor: "grey",
    navBackgroundColor: "#1c1e21",
    navTextColor: "white",
    cardBackground: "#1c1e21",
    cardHeaderBackground: "#333333",
    inputBackground: "rgb(43, 43, 43)",
    inputDisableColor: "grey",
    tableActionColor: "white",
  },
  light: {
    backgroundColor: "#eee",
    textColor: "black",
    hoverColor: "grey",
    navBackgroundColor: "black",
    navTextColor: "white",
    cardBackground: "white",
    cardHeaderBackground: "#FAF9F9",
    inputBackground: "white",
    inputDisableColor: "lightgrey",
    tableActionColor: "black",
  },
};

export const ThemeProvider = ({ children }) => {
  console.log(localStorage.theme);
  const [themeName, setThemeName] = useState(
    localStorage.theme ? localStorage.theme : "light"
  );
  const [theme, setTheme] = useState(themes[themeName]);

  useEffect(() => {
    setCSSVariables(theme);
  });

  const setCSSVariables = (theme) => {
    for (const value in theme) {
      document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
  };

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      setThemeName("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme(themes.dark);
      setThemeName("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

// Context
export const ThemeContext = createContext({
  themeName: "light",
  toggleTheme: () => {},
});

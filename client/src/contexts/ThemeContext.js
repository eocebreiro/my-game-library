import React, { createContext, useContext, useState, useEffect } from "react";

// State
const initialState = {
  isLightTheme: true,
  light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
  dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
};

const themes = {
  dark: {
    backgroundColor: "black",
    textColor: "#ddd",
    navBackgroundColor: "#1c1e21",
    navTextColor: "white",
    cardBackground: "#1c1e21",
    cardHeaderBackground: "#333333",
    inputBackground: "rgb(43, 43, 43)",
    inputDisableColor: "grey",
  },
  light: {
    backgroundColor: "#eee",
    textColor: "black",
    navBackgroundColor: "black",
    navTextColor: "white",
    cardBackground: "white",
    cardHeaderBackground: "#FAF9F9",
    inputBackground: "white",
    inputDisableColor: "lightgrey",
  },
};

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");
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
    } else {
      setTheme(themes.dark);
      setThemeName("dark");
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

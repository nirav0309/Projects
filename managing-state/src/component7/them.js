import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setThem] = useState("light");

  const toggleThem = () => {
    setThem((e) => (e === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleThem }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

const ThemeComponent = () => {
  const { theme, toggleThem } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "grey" : "lightblue",
        color: theme === "light" ? "lightblue" : "grey",
      }}
    >
      <p>current them {theme}</p>
      <button onClick={toggleThem}>Toggle</button>
    </div>
  );
};

export { ThemeProvider, ThemeComponent };

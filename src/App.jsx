import "./App.css";
import NavBar from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { Info } from "./components/Info";
import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState(null);
  const [selectedFont, setSelectedFont] = useState('Sans Serif');
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  useEffect(() => {
    if(word){
      const fetchUserData = async () => {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();
        setMeaning(data);
      };
    fetchUserData();
  }
  }, [word]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="container" style={{fontFamily: selectedFont}}>
        <NavBar selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
        <SearchBar setWord={setWord} />
        <Info meaning={meaning} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

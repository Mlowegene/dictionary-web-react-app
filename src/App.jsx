import "./App.css";
import NavBar from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { Info } from "./components/Info";
import { useState, useEffect } from "react";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    setMeaning(data);
  };

  useEffect(() => {
    if(word){
    fetchUserData();
  }
  }, []);

  return (
    <>
      <div className="container">
        <NavBar />
        <SearchBar setWord={setWord} fetchUserData={fetchUserData} />
        <Info meaning={meaning} />
      </div>
    </>
  );
}

export default App;

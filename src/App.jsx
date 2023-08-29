import "./App.css";
import NavBar from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <SearchBar />
      </div>
    </>
  );
}

export default App;

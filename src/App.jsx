import "./App.css";
import NavBar from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { Info} from "./components/Info";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <SearchBar />
        <Info />
      </div>
    </>
  );
}

export default App;

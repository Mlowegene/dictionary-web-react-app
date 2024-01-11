import { useState } from "react";
import searchIcon from "../assets/icon-search.svg";
import PropTypes from "prop-types";

export const SearchBar = ({setWord}) => {
 const [input, setInput] = useState("")
  const handleSearch = () => {
    setWord(input)
  };


  return (
    <div className="search-bar">
      <input type="text"
      onChange={(e) => setInput(e.target.value)} 
      className="search-field" />
      <button onClick={handleSearch}>
      <img src={searchIcon} alt="search-icon" className="search-icon" />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  setWord: PropTypes.func,
};

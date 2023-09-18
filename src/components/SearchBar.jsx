import searchIcon from "../assets/icon-search.svg";
import PropTypes from "prop-types";

export const SearchBar = ({setWord, fetchUserData}) => {

  const handleSearch = () => {
    fetchUserData();
  };


  return (
    <div className="search-bar">
      <input type="text"
      onChange={(e) => setWord(e.target.value)} 
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

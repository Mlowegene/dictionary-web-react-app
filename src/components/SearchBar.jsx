import searchIcon from "../assets/icon-search.svg";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-field" />
      <img src={searchIcon} alt="search-icon" className="search-icon" />
    </div>
  );
};

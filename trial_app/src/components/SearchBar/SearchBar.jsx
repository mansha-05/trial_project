import React from "react";
import "./SearchBar.css";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      className="menu-search"
      placeholder="Search dishes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;

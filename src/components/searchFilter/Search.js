import React from "react";
import "./search-box.styles.css";
const Search = ({ changeHandler, placeholder }) => {
  return (
    <input
      className="search"
      type="text"
      onChange={changeHandler}
      placeholder={placeholder}
    ></input>
  );
};

export default Search;

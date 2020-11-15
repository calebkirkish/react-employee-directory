import React from "react";
import "../styles/Search.css";

export default function Search({ handleSearchChange }) {
  return (
    <div className="search">
      <form className="form">
        <input
          className="search-field"
          type="search"
          placeholder="Search"
          onChange={(e) => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}

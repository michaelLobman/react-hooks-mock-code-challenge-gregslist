import React from "react";

function Search({ handleFilter, filter }) {
  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={filter}
        onChange={(e) => handleFilter(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

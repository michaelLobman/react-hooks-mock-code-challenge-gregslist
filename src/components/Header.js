import React from "react";
import Search from "./Search";

function Header({ handleFilter, filter }) {
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleFilter={handleFilter} filter={filter} />
    </header>
  );
}

export default Header;

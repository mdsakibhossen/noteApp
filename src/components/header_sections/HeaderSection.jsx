import React from 'react'
import SelectBox from "./SelectBox";
import SearchBox from "./SearchBox";

const HeaderSection = () => {
  return (
    <header className="header-section">
      <div className="logo">
        <a href="">
          <span>Note</span>App
        </a>
      </div>
      <div className="filter-boxes">
        <SelectBox />
        <SearchBox />
      </div>
    </header>
  );
}

export default HeaderSection
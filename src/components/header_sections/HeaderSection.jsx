import React from 'react'
import SelectBox from "./SelectBox";
import SearchBox from "./SearchBox";

const HeaderSection = () => {
  return (
    <header className="header-section py-5 px-3 shadow-2xl">
      <div className="container mx-auto flex items-center">
        <div className="logo me-auto">
          <a href="" className='text-white text-3xl font-medium'>
            <span className="text-orange-600">Note</span>App
          </a>
        </div>
        <div className="filter-boxes flex gap-5 w-1/2">
          <SelectBox />
          <SearchBox />
        </div>
      </div>
    </header>
  );
}

export default HeaderSection
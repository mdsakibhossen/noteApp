import React from 'react'

const SearchBox = () => {
  return (
    <div className="search-box w-1/2">
      <input
        type="search"
        className="p-2 rounded-md outline-none w-full bg-slate-800 placeholder:text-orange-600 tracking-wider"
        placeholder="Search Note..."
      />
    </div>
  );
}

export default SearchBox
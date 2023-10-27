import React from 'react'

const SearchBox = () => {
  return (
    <div className="search-box w-full">
      <input
        type="search"
        className="p-2 text-blue-600 rounded-md outline-none w-full bg-slate-800 placeholder:text-blue-600 tracking-wider"
        placeholder="Search Note..."
      />
    </div>
  );
}

export default SearchBox
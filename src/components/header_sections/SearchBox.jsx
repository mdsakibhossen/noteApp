import React, { useContext } from 'react'
import { NoteContext } from './../../contexts/NoteContext';

const SearchBox = () => {
  const {noteStates,dispatch} = useContext(NoteContext);
  return (
    <div className="search-box w-full">
      <input
        onChange={(e) =>
          dispatch({ type: "SEARCH_NOTE", payload: e.target.value })
        }
        value={noteStates.searchText}
        type="search"
        className="p-2 text-blue-600 rounded-md outline-none w-full bg-slate-800 placeholder:text-blue-600 tracking-wider"
        placeholder="Search Notes..."
      />
    </div>
  );
}

export default SearchBox
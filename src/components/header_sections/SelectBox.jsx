import React from 'react'

const SelectBox = () => {
  return (
    <div className="select-box w-full">
      <select className="p-2 rounded-md outline-none w-full bg-slate-800 text-blue-600 tracking-wider cursor-pointer">
        <option value={undefined}>All Notes</option>
        <option value={true}>Completed Notes</option>
        <option value={false}>Uncompleted Notes</option>
      </select>
    </div>
  );
}

export default SelectBox
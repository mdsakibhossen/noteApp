import React from 'react'

const SelectBox = () => {
  return (
    <div className="select-box">
      <select>
        <option value={undefined}>All Notes</option>
        <option value={true}>Completed Notes</option>
        <option value={false}>Uncompleted Notes</option>
      </select>
    </div>
  );
}

export default SelectBox
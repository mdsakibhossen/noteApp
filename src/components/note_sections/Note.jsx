import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
const Note = () => {
  return (
    <div className="note shadow-xl p-4 rounded-md text-slate-200 font-light bg-slate-600">
      <div className="note-header">
        <h3 className="title font-semibold text-2xl mb-2 text-blue-400 tracking-wider">
          My First Note
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit inventore
          distinctio facere, suscipit similique illum! Accusantium consequuntur
          maiores explicabo corrupti!
        </p>
      </div>
      <div className="note-footer flex mt-3">
        <div className="date me-auto text-slate-400">
          <small>16/07/2023</small>
        </div>
        <div className="btn-box flex gap-3">
          <button className="text-lime-500">
            <FiEdit />
          </button>
          <button className="text-red-400">
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;

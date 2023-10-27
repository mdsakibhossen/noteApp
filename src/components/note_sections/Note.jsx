import React, { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { NoteContext } from "../../contexts/NoteContext";

const Note = (props) => {
  const {dispatch} = useContext(NoteContext);
  return (
    <div className="note shadow-xl p-4 rounded-md text-slate-200 font-light bg-slate-600">
      <div className="note-header">
        <h3 className="title font-semibold text-2xl mb-2 text-blue-400 tracking-wider">
          {props.note.title}
        </h3>
        <p>{props.note.description}</p>
      </div>
      <div className="note-footer flex mt-3">
        <div className="date me-auto text-slate-400">
          <small>{props.note.date}</small>
        </div>
        <div className="btn-box flex gap-3 items-center">
          <input
            className="cursor-pointer rounded text-blue-600"
            type="checkbox"
          />
          <button
            className="text-lime-500"
            onClick={() => dispatch({ type: "EDIT_NOTE", payload: props.note })}
          >
            <FiEdit />
          </button>
          <button
            className="text-red-400"
            onClick={() =>
              dispatch({ type: "DELETE_NOTE", payload: props.note })
            }
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;

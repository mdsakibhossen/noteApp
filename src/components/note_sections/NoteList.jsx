import React, { useContext } from "react";
import Note from "./Note";
import { NoteContext } from "../../contexts/NoteContext";

const NoteList = () => {
  const { noteStates } = useContext(NoteContext);
  let notes = noteStates.noteList.filter(
    (note) =>
      note.title
        .trim()
        .toLowerCase()
        .includes(noteStates.searchText.trim().toLowerCase()) ||
      note.description
        .trim()
        .toLowerCase()
        .includes(noteStates.searchText.trim().toLowerCase())
  );
  const hasNotes = notes.length ? true : false;
  
  return (
    <div
      className={
        hasNotes
          ? "note-list w-full lg:w-2/3 grid xl:grid-cols-2 gap-4"
          : "w-full flex items-center justify-center self-center"
      }
    >
      {hasNotes ? (
        notes.map((note) => <Note note={note} key={note.id} />)
      ) : (
        <h2 className="text-xl md:text-3xl text-slate-200 text-center">
          No Notes are Available
        </h2>
      )}
    </div>
  );
};

export default NoteList;

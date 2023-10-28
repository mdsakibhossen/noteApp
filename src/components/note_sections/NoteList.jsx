import { useContext } from "react";
import Note from "./Note";
import { NoteContext } from "../../contexts/NoteContext";

const NoteList = () => {
  const { noteStates } = useContext(NoteContext);
  let filteredNotes = noteStates.noteList;

  switch (noteStates.noteStatus) {
    case "true":
      filteredNotes = filteredNotes.filter(
        (note) => String(note.isCompleted) === "true"
      );
      break;
    case "false":
      filteredNotes = filteredNotes.filter(
        (note) => String(note.isCompleted) === "false"
      );
      break;

    default:
      filteredNotes = noteStates.noteList;
      break;
  }

  if (noteStates.searchText.trim()) {
    filteredNotes = filteredNotes.filter(
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
  }

  const hasFilteredNotes = filteredNotes.length ? true : false;

  return (
    <div
      className={
        hasFilteredNotes
          ? "note-list w-full lg:w-2/3 grid xl:grid-cols-2 gap-4"
          : "w-full lg:w-2/3 flex items-center justify-center self-center"
      }
    >
      {hasFilteredNotes ? (
        filteredNotes.map((note) => <Note note={note} key={note.id} />)
      ) : (
        <h2 className="text-xl md:text-3xl text-slate-200 text-center">
          No Notes are Available
        </h2>
      )}
    </div>
  );
};

export default NoteList;

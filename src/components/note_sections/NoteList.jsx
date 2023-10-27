import React, { useContext } from 'react'
import Note from './Note'
import { NoteContext } from '../../contexts/NoteContext';

const NoteList = () => {
  const {noteStates,dispatch} = useContext(NoteContext);
  return (
    <div className="note-list w-full lg:w-2/3 grid xl:grid-cols-2 gap-4 ">
      {noteStates.noteList.map((note) => (
          <Note note={note} key={note.id} />
      ))}
    </div>
  );
}

export default NoteList
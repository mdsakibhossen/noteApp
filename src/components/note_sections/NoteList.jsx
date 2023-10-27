import React from 'react'
import Note from './Note'

const NoteList = () => {
  return (
    <div className="note-list w-full lg:w-2/3 grid xl:grid-cols-2 gap-4 ">
      <Note />
      <Note />
      <Note />
    </div>
  );
}

export default NoteList
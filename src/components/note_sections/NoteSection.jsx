import React from 'react'
import NoteList from './NoteList'
import Form from './Form'
const NoteSection = () => {
  return (
    <div className='note-section'>
        <Form />
        <NoteList />
    </div>
  )
}

export default NoteSection
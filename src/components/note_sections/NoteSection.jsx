import React from 'react'
import NoteList from './NoteList'
import Form from './Form'
const NoteSection = () => {
  return (
    <div className='note-section container mx-auto py-10 flex gap-8'>
        <Form />
        <NoteList />
    </div>
  )
}

export default NoteSection
import React from 'react';
import AddNotes from './AddNotes';
import Note from './Note';

export default function NotesList({notes,handleAddNote, handleDeleteNote}) {
  return (<div className='notes-list'>
      <AddNotes handleAddNote={handleAddNote} />
      {console.log(notes)}
        {
            notes.map(note =>(
            <Note key={note.id} {...note} handleDeleteNote={handleDeleteNote} />))
        }
  </div>);
}

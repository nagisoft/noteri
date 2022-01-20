import React from 'react';
import {MdDeleteForever,MdNoteAdd} from 'react-icons/md';


export default function Note({id,text,date, handleDeleteNote}) {
  return (
  
  <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
          <small>{date}</small>
            <MdDeleteForever className="delete-icon" size="1.3em" onClick={() => handleDeleteNote(id)}/>
            
      </div>
  </div>
  );
}


import React, {useState } from 'react'
import {MdDeleteForever,MdNoteAdd} from 'react-icons/md';

export default function AddNotes({handleAddNote}) {
    const [noteText,setNoteText] = useState('');
    const characterLimit = 200;


    const handleChange = (e) =>{
        if(characterLimit - e.target.value.length >=0){

            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = (e) =>{
        if(noteText.trim().length>0){
                handleAddNote(noteText)
                setNoteText('');
        }        
    }


  return (
      <div class="notepad">
  <div class="top"></div>
      <div className='note new'>
          <textarea rows="8" cols="10" placeholder="type to add a note ..."
          value={noteText}
          onChange={handleChange}>

          </textarea>

          <div className='note-footer'>
              <small>{characterLimit - noteText.length} remaining</small>
              <button  onClick={handleSaveClick}><MdNoteAdd  className="delete-icon" size="1.3em"/></button>
              
          </div>
      </div>
      </div>
  );
}

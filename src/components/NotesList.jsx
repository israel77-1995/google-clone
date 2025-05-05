import React from 'react';
import Note from './Note';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <Note 
          key={index} 
          title={note.title} 
          content={note.content} 
        />
      ))}
    </div>
  );
};

export default NotesList;

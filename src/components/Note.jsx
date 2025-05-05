import React from 'react';

const Note = ({ title, content }) => {
  return (
    <div className="note">
      {title && <div className="note-title">{title}</div>}
      {content && <div className="note-content">{content}</div>}
      <div className="note-actions">
        <div className="note-icons">
          <span className="material-symbols-outlined">add_alert</span>
          <span className="material-symbols-outlined">person_add</span>
          <span className="material-symbols-outlined">palette</span>
          <span className="material-symbols-outlined">image</span>
          <span className="material-symbols-outlined">archive</span>
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>
    </div>
  );
};

export default Note;

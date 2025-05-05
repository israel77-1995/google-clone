import { useState, useEffect } from 'react';
import SideBar from '../components/SideBar.jsx';
import Header from '../components/header.jsx';
import NoteTaker from '../components/NoteTaker.jsx';
import NotesList from '../components/NotesList.jsx';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const saveNote = () => {
    if (title.trim() !== '' || content.trim() !== '') {
      const newNote = {
        title: title,
        content: content,
        id: Date.now()
      };

      setNotes([newNote, ...notes]);
      setTitle('');
      setContent('');
    }
  };

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="home-page">
      <Header />
      <div className="main-content">
        <SideBar />
        <div className="notes-container">
          <NoteTaker
            onTitleChange={handleTitleChange}
            onContentChange={handleContentChange}
            onSave={saveNote}
          />
          <NotesList notes={notes} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

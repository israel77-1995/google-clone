import { useState, useEffect } from 'react';
import SideBar from '../components/SideBar.jsx';
import Header from '../components/header.jsx';
import NoteTaker from '../components/NoteTaker.jsx';
import NotesList from '../components/NotesList.jsx';

const HomePage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false); // Default to collapsed
  const [menuActive, setMenuActive] = useState(false); // Track if menu is active
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Function to toggle sidebar and menu active state
  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
    setMenuActive(!menuActive);
  };

  // Function to handle clicks outside the menu
  const handleClickOutside = (event) => {
    // Only deactivate if clicking outside the menu and menu is currently active
    if (menuActive && !event.target.closest('.menu-icon')) {
      setMenuActive(false);
    }
  };

  // Add event listener for clicks
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuActive]);

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
      <Header onMenuClick={toggleSidebar} menuActive={menuActive} />
      <div className="main-content">
        <SideBar expanded={sidebarExpanded} />
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

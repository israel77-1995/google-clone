// Importing the React library (required for JSX syntax)
import React from "react";

// Importing the CSS file for styling the App component
import './App.css';

// Importing the Header component (currently unused in this file)
import Header from './components/header.jsx';

// Importing the HomePage component, which will be rendered in the App component
import HomePage from "./screens/HomePage.jsx";

// Defining the main App component
function App() {
  return (
    <>
      {/* Rendering the HomePage component */}
      <HomePage />
    </>
  );
}

// Exporting the App component as the default export
export default App;

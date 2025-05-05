import React from "react";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <span className="material-symbols-outlined search-icon">search</span>        
            <input type="text" placeholder="Search in Keep" />
        </div>
    );
};

export default SearchBar;

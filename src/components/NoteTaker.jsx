import { useState, useRef, useEffect } from 'react';

const NoteTaker = ({ onTitleChange, onContentChange, onSave }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const noteRef = useRef(null);

    const handleTitleInput = () => {
        if (onTitleChange && titleRef.current) {
            onTitleChange(titleRef.current.textContent);
        }
    };

    const handleContentInput = () => {
        if (onContentChange && contentRef.current) {
            onContentChange(contentRef.current.textContent);
        }
    };

    const handleFocus = () => {
        setIsExpanded(true);
    };

    const handleClickOutside = (event) => {
        if (
            noteRef.current &&
            !noteRef.current.contains(event.target)
        ) {
            if (onSave) {
                onSave();
            }
            setIsExpanded(false);

            // Clear the content of the editable divs
            if (titleRef.current) titleRef.current.textContent = '';
            if (contentRef.current) contentRef.current.textContent = '';
        }
    };

    const handleClose = () => {
        if (onSave) {
            onSave();
        }
        setIsExpanded(false);

        // Clear the content of the editable divs
        if (titleRef.current) titleRef.current.textContent = '';
        if (contentRef.current) contentRef.current.textContent = '';
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onSave]);

    return (
        <div className="note-taker" ref={noteRef}>
            {isExpanded && (
                <div
                    className="note-title"
                    contentEditable={true}
                    ref={titleRef}
                    onInput={handleTitleInput}
                    placeholder="Title"
                ></div>
            )}
            <div
                className="note-content"
                contentEditable={true}
                ref={contentRef}
                onInput={handleContentInput}
                onFocus={handleFocus}
                placeholder="Take a note..."
            ></div>
            {isExpanded && (
                <div className="note-actions">
                    <div className="note-icons">
                        <span className="material-symbols-outlined">add_alert</span>
                        <span className="material-symbols-outlined">person_add</span>
                        <span className="material-symbols-outlined">palette</span>
                        <span className="material-symbols-outlined">image</span>
                    </div>
                    <button onClick={handleClose}>Close</button>
                </div>
            )}
        </div>
    );
};

export default NoteTaker;
const SideButton = ({icon, name, active}) => {
    // Using Material Symbols instead of SVG files
    return (
        <div className={`sidebar-button ${active ? 'active' : ''}`}>
            <div className="icon-container">
                <span className={`material-symbols-outlined ${active ? 'active' : ''}`}>{icon.toLowerCase()}</span>
            </div>
            <div className="text-container">
                <span className="button-name">{name}</span>
            </div>
        </div>
    );
}

export default SideButton;

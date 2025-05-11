const SideButton = ({icon, name, expanded}) => {
    // Using Material Symbols instead of SVG files
    return (
        <div className="sidebar-button">
            <span className="material-symbols-outlined">{icon.toLowerCase()}</span>
            {expanded && <span className="button-name">{name}</span>}
        </div>
    );
}

export default SideButton;

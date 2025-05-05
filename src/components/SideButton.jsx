const SideButton = ({icon, name}) => {
    // Using Material Symbols instead of SVG files
    return (
        <div className="sidebar-button">
            <span className="material-symbols-outlined">{icon.toLowerCase()}</span>
            <span className="button-name">{name}</span>
        </div>
    );
}

export default SideButton;

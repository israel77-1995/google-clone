const SideBar = ({ expanded }) => {
  return (
    <aside className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-buttons">
        <div className="sidebar-button active">
          <div className="button-background"></div>
          <div className="icon-wrapper">
            <span className="material-symbols-outlined active">lightbulb</span>
          </div>
          <span className="button-name">Notes</span>
        </div>
        <div className="sidebar-button">
          <div className="button-background"></div>
          <div className="icon-wrapper">
            <span className="material-symbols-outlined">notifications</span>
          </div>
          <span className="button-name">Reminders</span>
        </div>
        <div className="sidebar-button">
          <div className="button-background"></div>
          <div className="icon-wrapper">
            <span className="material-symbols-outlined">label</span>
          </div>
          <span className="button-name">Labels</span>
        </div>
        <div className="sidebar-button">
          <div className="button-background"></div>
          <div className="icon-wrapper">
            <span className="material-symbols-outlined">archive</span>
          </div>
          <span className="button-name">Archive</span>
        </div>
        <div className="sidebar-button">
          <div className="button-background"></div>
          <div className="icon-wrapper">
            <span className="material-symbols-outlined">delete</span>
          </div>
          <span className="button-name">Trash</span>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;

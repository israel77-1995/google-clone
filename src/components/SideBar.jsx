import SideButton from "./SideButton.jsx"

const SideBar = ({ expanded }) => {
  return (
    <aside className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-buttons">
        <SideButton icon="lightbulb" name="Notes" expanded={expanded} />
        <SideButton icon="notifications" name="Reminders" expanded={expanded} />
        <SideButton icon="label" name="Labels" expanded={expanded} />
        <SideButton icon="archive" name="Archive" expanded={expanded} />
        <SideButton icon="delete" name="Trash" expanded={expanded} />
      </div>
    </aside>
  );
}

export default SideBar;

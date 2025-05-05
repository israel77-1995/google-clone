import SideButton from "./SideButton.jsx"

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-buttons">
        <SideButton icon="lightbulb" name="Notes" />
        <SideButton icon="notifications" name="Reminders" />
        <SideButton icon="label" name="Labels" />
        <SideButton icon="archive" name="Archive" />
        <SideButton icon="delete" name="Trash" />
      </div>
    </aside>
  );
}

export default SideBar;
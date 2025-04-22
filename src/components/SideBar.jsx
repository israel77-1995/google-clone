import SideButton from "./SideButton.jsx"

const SideBar = () => {
return (
  <aside>
    <SideButton icon="Lightbulb" name="Notes" />
    <SideButton icon="Notification" name="Reminders" />
    <SideButton icon="Label" name="Labels" />
    <SideButton icon="Archive" name="Archive" />
    <SideButton icon="Trash" name="Trash" />
  </aside>
);
}



export default SideBar;
import SideButton from "./SideButton.jsx"

const SideBar = () => {
return (
  <aside>
    <SideButton icon="Lightbulb" name="Notes" />
    <SideButton icon="Notifications" name="Reminders" />
  </aside>
);
}



export default SideBar;
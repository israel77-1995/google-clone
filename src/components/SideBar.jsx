import SideButton from "./SideButton.jsx"

const SideBar = () => {
return (
  <aside>
    <SideButton icon="Lightbulb" name="Notes" />
    <SideButton icon="Notification" name="Reminders" />
  </aside>
);
}



export default SideBar;
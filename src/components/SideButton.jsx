// Importing the LightBulb asset
import LightBulb from '../assets/light-logo.svg'; // Update the path as needed
import Notification from '../assets/notifications.svg'; // Update the path as needed
import Label from '../assets/label.svg'; // Update the path as needed
import Trash from '../assets/trash.svg'; // Update the path as needed
import Archive from '../assets/archive.svg'; // Update the path as needed
const SideButton = ({icon, name}) => {
    let Icon;

    switch(icon){
      case 'Lightbulb': 
        Icon = <img src={LightBulb} alt="Lightbulb Icon" />;
        break;
      case 'Notification': Icon = <img src={Notification} alt="Reminder Icon"/>;
        break;
      case 'Label': Icon = <img src={Label} alt="Label Icon"/>;
        break;
      case 'Trash': Icon = <img src={Trash} alt="Trash icon"/>;
        break;
      case 'Archive': Icon =  <img src={Archive} alt="Archive icon"/>;
        break;
    }
    return(
        <div>
            {
                Icon
            }
            <span>{name}</span>
        </div>
    );

}

export default SideButton;

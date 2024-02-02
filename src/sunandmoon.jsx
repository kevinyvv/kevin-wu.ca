import React, {createContext} from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const DarkModeContext = createContext();

const ModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleDarkMode = (checked) => {
      // Update the state based on the new checked value
      setIsDarkMode(checked);

      // Perform the side effects after the state has been updated
      if (checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        console.log('Dark mode on');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        console.log('Dark mode off');
      }
    };
  
    return (
      <div className="sticky w-12 h-0 top-4">
        <DarkModeSwitch
          style={{ marginLeft: '16px' }}
          checked={isDarkMode}
          onChange={(e) => toggleDarkMode(e)}
          size={40}
          moonColor="#fcdf88"
        />
      </div>
    );
}

export default ModeSwitch;

import logo from '../assets/logo.svg';
import moon from '../assets/icon-moon.svg';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { ThemeContext } from "../App";
import { useContext } from "react";

function NavBar({selectedFont, setSelectedFont}) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  

  return (
    <div className="nav">
        <img src={logo} alt="logo" className='logo' />
        <select className='font-type' onChange={handleFontChange} value={selectedFont}>
            <option value="Inter">Sans Serif</option>
            <option value="Lora">Serif</option>
            <option value="Inconsolata">Mono</option>
        </select>
        <div className='toggle'>
            <span onClick={toggleTheme} className='toggle-icon'>
              {theme === "dark" ? <FaToggleOn /> : <FaToggleOff />}
            </span>
            <img src={moon} alt='moon-icon' className='moon-icon' />
        </div>
    </div>
  )
}

export default NavBar;
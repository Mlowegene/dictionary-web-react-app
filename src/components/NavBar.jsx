import logo from '../assets/logo.svg';
import moon from '../assets/icon-moon.svg';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

function NavBar() {
  return (
    <div className="nav">
        <img src={logo} alt="logo" className='logo' />
        <select className='font-type'>
            <option>Sans Serif</option>
            <option>Serif</option>
            <option>Mono</option>
        </select>
        <div className='toggle'>
            <FaToggleOff className='toggle-icon' />
            <img src={moon} alt='moon-icon' />
        </div>
    </div>
  )
}

export default NavBar
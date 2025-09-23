import styles from './Navbar.module.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Mini <span>Blog</span></NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
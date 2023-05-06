import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './BurgerButton.css';
import { Link } from 'react-router-dom'


export default props => {
  return (
    <Menu  right >
      <Link className="menu-item" to={'/'} >
        Home
      </Link>
      <Link className="menu-item" to={'/strength'}>
      Strength
      </Link>
      <Link className="menu-item" to={'/about'}>
      ABOUT US
      </Link>
      <Link className="menu-item" to={'/contact'}>
      CONTACT US
      </Link>
    </Menu>
  );
};
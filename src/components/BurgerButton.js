import React, { useState } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './BurgerButton.css';
import { Link } from 'react-router-dom'


export default props => {
const [isOpen, setIsOpen] = useState(false);
console.log(isOpen,'LOF');

  return (
    <Menu isOpen={isOpen}  right onClose={() => setIsOpen(true)} >
      <Link onClick={() => setIsOpen(!isOpen)} className="menu-item" to={'/'} >
        Home
      </Link>
      <Link onClick={() => setIsOpen(!isOpen)} className="menu-item" to={'/strength'}>
      Strength
      </Link>
      <Link onClick={() => setIsOpen(!isOpen)} className="menu-item" to={'/about'}>
      ABOUT US
      </Link>
      <Link onClick={() => setIsOpen(!isOpen)} className="menu-item" to={'/contact'}>
      CONTACT US
      </Link>
    </Menu>
  );
};
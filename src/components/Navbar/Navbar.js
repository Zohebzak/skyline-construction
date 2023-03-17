import React from 'react'
import logo from '../../images/SkylineLogo2png.png'
import style from './Navbar.module.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      {/* <header style={{ textAlign: 'center' }}>SKYLINE CONSCTRUCTIONS AND ENGENEERS PVT LTD</header> */}
      <div className={style.mainDiv}>
        <div className={style.skylineLogo}>
          <img src={logo} alt='logo' width={"100px"} />
        </div>
        <ul className={style.navUL}>
          {/*  */}


          <li><Link to={'/'}>HOME </Link></li>
          <li>    <a href='#'>OUR STRENGTH</a> <svg height="25" viewBox="0 0 48 48" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M14 20l10 10 10-10z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>
          </li>
          <li className='DropDown' ><a href='#'>OUR PROJECTS<span><svg height="25" viewBox="0 0 48 48" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M14 20l10 10 10-10z" /><path d="M0 0h48v48h-48z" fill="none" /></svg></span></a><div className="drop-content">
            <a href="#">Completed</a><br />
            <a href="#">On Going</a><br />
          </div> </li>
          <li><Link to={'/about'}>ABOUT US</Link></li>
          <li><a href='#'>CONTACT US</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
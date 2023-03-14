import React from 'react'
import img1 from '../../images/SkylineLogo.jpg'
import style from './Navbar.module.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      {/* <header style={{ textAlign: 'center' }}>SKYLINE CONSCTRUCTIONS AND ENGENEERS PVT LTD</header> */}
      <div className={style.mainDiv}>
        <div className={style.skylineLogo}>
          <img src={img1} alt='logo' width={"100px"} />
        </div>
        <ul className={style.navUL}>
          <li><Link to={'/'}>HOME </Link></li>
          <li><a href='#'>OUR STRENGTH</a></li>
          <li><a href='#'>OUR PROJECTS</a></li>
          <li><Link to={'/about'}>ABOUT US</Link></li>
          <li><a href='#'>CONTACT US</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
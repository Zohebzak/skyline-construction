import React, { useEffect } from 'react'
import logo from '../../images/SkylineLogo2png.png'
import style from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import Hamburger from 'hamburger-react'
import { useState } from 'react'
import BurgerButton from '../BurgerButton'



function Navbar() {
  // const [isOpen, setOpen] = useState(false)

  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0
    })
  }, [pathname])
  return (
    <>
    <div className={style.navBarDiv}>
      {/* <header style={{ textAlign: 'center' }}>SKYLINE CONSCTRUCTIONS AND ENGENEERS PVT LTD</header> */}
      <div className={style.mainDiv}>
        <div className={style.skylineLogo}>
          <img src={logo} alt='logo' width={"100px"} onClick={() => navigate("/")} />
        </div>
        
        <ul className={style.navUL}>
          {/*  */}
          <li><Link to={'/'}>HOME </Link></li>
          <li><Link to={'/strength'}>OUR STRENGTH</Link>
          </li>
          <li className='DropDown' ><a href='#'>OUR PROJECTS<span><svg height="25" viewBox="0 0 48 48" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M14 20l10 10 10-10z" /><path d="M0 0h48v48h-48z" fill="none" /></svg></span></a><div className="drop-content">
            <Link to={'/completed'}>Completed</Link><br />
            <Link to={'/OnGoing'}>On Going</Link><br />
          </div> </li>
          <li><Link to={'/about'}>ABOUT US</Link></li>
          <li>< Link to={'/contact'}>CONTACT US</Link></li>
        </ul>
       
      </div>
   
    </div>
    <div className="App" id="outer-container">
        <BurgerButton pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
       
      </div>
    </>
  )
}

export default Navbar
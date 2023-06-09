import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/SkylineLogo2png.png'
import './Footer.scss'


function Footer() {
  return (
    <>

      <div className='maindiv'>
        <div className='im-section'>
          <img src={img} alt='!' />
          <h4>Skyline Contractors & Engineers Pvt Ltd</h4>
        </div>
        <div className='list-item'>
          <ul className='list'>
            <li><Link to={'./career'}>Career</Link></li>
            <li><Link to={'./completed'}>Our Project</Link></li>
            <li><Link to={'./about'}>About Us</Link></li>
            <li><Link to={'./contact'}>Contact Us</Link></li>
            <li><Link to={'./gallery'}>Gallery</Link></li>
            <li><Link to={'/Login'}>login </Link></li>
          </ul>
        </div>
      </div>
      <div className='main-containt'>
        <div className='main1-text'>
          <span><i class="fa fa-map-marker" style={{ color: 'bule', fontSize: '20px', paddingRight: '1rem' }} /></span>
          <div className='text-line'>
            <p>Amin Conolny,</p>
            <p>Parbhani 431401.</p>
            <p>Maharashtra (India).</p>
          </div>
        </div>
        <div className='email-section'>
          <span><i class="fa fa-envelope-o" style={{ color: 'black', fontSize: '20px', paddingRight: '1rem' }} /></span>
          <div className='email-text'>
            <p>Email us :</p>
            <p>cmd@skyline.org.in, info@skyline.org.in</p>
          </div>
        </div>
        <div className='phoneno-section'>
          <i class="fa fa-mobile-phone" style={{ color: 'black', fontSize: '30px', paddingRight: '1rem' }} />
          <div className='phone-no'>
            <p>Call us :</p>
            <p>+91- 919028965441</p>
            <p>+91-919373675211</p>
          </div>
        </div>
      </div>
      <div className='footer-div'>
        <div className='text-footer'>
          <p>copyrights &#169; Skyline Contractors & Engineers(P)Ltd</p>
        </div>
        <div>
          <div className='foterlist'>
            <i><p>Desingh by : BlueAxis IT Services.</p></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

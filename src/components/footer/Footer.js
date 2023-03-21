import React from 'react'
import img from '../../images/SkylineLogo2png.png'
import './Footer.scss'

function Footer() {
  return (
    <>

      <div className='maindiv'>
        <div className='im-section'>
          <img src={img} alt='!' />
          <h4>Skyline Construction Pvt Ltd</h4>
        </div>
        <div className='list-item'>
          <ul className='list'>
            <li>Career</li>
            <li>Our Project</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className='main-containt'>
        <div className='main1-text'>
          <span><i class="fa fa-map-marker" style={{ color: 'bule', fontSize: '30px', paddingRight: '2rem' }} /></span>
          <div className='text-line'>
            <p>Plot No. 36, Gut No. 41,</p>
            <p>Amin Conolny,</p>
            <p>Parbhani 431401.</p>
            <p>Maharashtra State, (India).</p>
          </div>
        </div>
        <div className='email-section'>
          <span><i class="fa fa-envelope-o" style={{ color: 'black', fontSize: '30px', paddingRight: '2rem' }} /></span>
          <div className='email-text'>
            <p>Email us :</p>
            <p>Skyline@gmail.com</p>
          </div>
        </div>
        <div className='phoneno-section'>
          <i class="fa fa-mobile-phone" style={{ color: 'black', fontSize: '40px', paddingRight: '2rem' }} />
          <div className='phone-no'>
            <p>Call us :</p>
            <p>+91-0000000000</p>
            <p>+91+0000000000</p>
          </div>
        </div>
      </div>
      <div className='footer-div'>
        <div className='text-footer'>
          <p>copyrights &#169; Skyline Constructions & Engineers(P)Ltd</p>
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

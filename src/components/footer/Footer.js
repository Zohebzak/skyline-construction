import React from 'react'
import img from '../../images/SkylineLogo2png.png'
import './Footer.scss'

function Footer() {
  return (
    <>
      
      <div className='maindiv'>
        <div className='im-section'>
          <img src={img} alt='!' />
          <h4>Skyline Construction PVT LTD</h4>
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
          <span><i class="fa fa-map-marker" style={{ color: 'bule', fontSize: '30px',paddingRight:'2rem' }} /></span>
          <div className='text-line'>
            <p>Plot No. 36, Gut No. 41,</p>
            <p>Paithan- Waluj Link Road,</p>
            <p>Aurangabad. - 431 005.</p>
            <p>Maharashtra State, (India).</p>
          </div>
        </div>
        <div className='email-section'>
          <span><i class="fa fa-envelope-o" style={{ color: 'black', fontSize: '30px',paddingRight:'2rem' }} /></span>
          <div className='email-text'>
            <p>Email us :</p>
            <p>Skyline@gmail.com</p>
          </div>
        </div>
        <div className='phoneno-section'>
          <i class="fa fa-mobile-phone" style={{ color: 'black', fontSize: '40px',paddingRight:'2rem' }} />
          <div className='phone-no'>
            <p>Call us :</p>
            <p>+19-7028976022</p>
            <p>+19-7028976022</p>
          </div>
        </div>
      </div>
      <div className='footer-div'>
        <div className='text-footer'>
          <p>@2023 BlueAxis IT Services.</p>
          <p>Create By : Mubashir Khan</p>
        </div>
        <div>
          <ul className='foterlist'>
            <li>COPYRIGHT & TERMS</li>
            <li>PRIVACY POLICY</li>
            <li>SITEMAP</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer

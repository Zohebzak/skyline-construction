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
      <div className='footer-div'>
        <div className='text-footer'>
          <p>copyrights &#169; Skyline Constructions & Engineers(P)Ltd</p>
        </div>
        <div>
          <div className='foterlist'>
          <p>@2023 BlueAxis IT Services.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

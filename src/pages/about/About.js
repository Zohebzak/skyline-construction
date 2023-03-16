import React from 'react'
import style from './About.module.scss'
import sideimg from '../../images/company-pic.jpg'
import img3 from '../../images/construction-background.jpg'
import Info from '../home/slideshow/info/Info'


function About() {
  return (
    <>
      <h2>About Us</h2>
      <div className={style.AboutUS}>
        <img src={sideimg} alt="compant image" />
        <p className={style.header}><i>Skyline Contractors And Engineers Private Limited is a newly incorporated company. The company is having following credentials:</i><br />
          The company is promoted by Shri. Iraj Siddiqui Ifteqaroddin Siddiqui & Shri. Meraj Siddiqui Ifteqaroddin Siddiqui. Both the promoter/directors are experienced civil contractors and have in-depth knowledge of the field of civil construction. Shri. Iraj Siddiqui Ifteqaroddin Siddiqui is the Chairman and Managing Director of the company. He is the proprietor of Skyline Construction, a sole proprietorship entity. He is a young and dynamic entrepreneur. He started the work of contractorship in the year 2014. He is a Graduate (B.Tech) from Marathwada Agricultural University. He started his contractorship business with sub contracts from various entities and gradually gained experience and expertise.

          Considering the growth and ever increasing scope for the committed and quality works, he has decided to go in for corporate form of organisation to overcome the limitations of sole proprietorship. The newly formed company will apply for new work bids on the basis of experience, expertise, credentials, technical capacity and financial capacity of the erstwhile sole proprietorship. Henceforth, all new tender applications will be made by the company and the sole proprietorship will continue the on-going works till the completion of the same.</p>
      </div>
      <div className={style.backgroundText}>
        <img src={img3} alt='background-image' className={style.img2} />
        <p>We're knowledgeable about
          build your dream project...
          Building The World more Stronger
          The dedication and commitment of Shreehari Associates (P) Ltd., a well-known construction company goes far beyond the excellence in workmanship and time bound achievements. We would like to see our client at satisfaction, every time we complete a phase. We have prudence our human resource to deliver results with a clocklike precision, as the CONSTRUCTION is the fuel of our working.</p>\
          
      </div>
     <Info/>

    </>
  )
}

export default About
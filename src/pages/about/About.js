import React from 'react'
import style from './About.module.scss'
import sideimg from '../../images/company-pic.jpg'
import img3 from '../../images/construction-background.jpg'
import imgAbout from '../../images/about.jpeg'
import asideImg from '../../images/about-aside-image2.jpg'
import asideImg2 from '../../images/aside-image2.jpg'
import ourVision from '../../images/our_vision3.png'
import ourMission from '../../images/our_mission.png'
import 'animate.css';




function About() {

  return (
    <>
      <div className={style.mainAbout1}>
        <div className={style.mainAbout2}>
          {/* <div className={style.heading}>
            <h1 className={style.textFromRight}><i>Skyline construction &</i></h1>
            <h1 className={style.textFromRight}><i></i>Engineers pvt ltd</h1>
          </div> */}
          <img src={imgAbout} />
        </div>
        <div className={style.mainAbout3}>
          <div className={style.paraImg}>
            <img src={asideImg} alt={'company pic'} />
            <div className={style.para}>
              <h3>Who we are</h3>
              <br />
              <p>Skyline Construc t i on was e st a b lish ed as a propr i e t orship conc ern
                n am e l y “ IRAJ I. SIDDIQUI” in 2014 by “ IRAJ I. SIDDIQUI”. The f i rm w a s
                enga g e d in carrying out Commercia l & R esid ential projects (Govt . & Pr i vate)
                in t he e a rl i e r ye a rs. T h e fir m wa s a ls o st a rt e d wo r k i n g as a s up p l i e r of
                R e a d y Mix C o nc r e t e in 2017. T h e c o m p a n y is k n o w n fo r its h i g h e st q u a l i t y
                and a t t enti ve l y t owards t heir c l i e nt e le s. The compan y has execut ed siz eable
                b u i l d i n g , b ri d g e s & r o a d s in st a t e of M a h a r a s h tr a stri c t l y w i t h t h e Go vt.
                qu a lit y norms a nd specifications..</p>

            </div>
          </div>
        </div>

      </div>
      <div className={style.aboutSubContent1}>
        <div className={style.aboutSubContent2}>
          <img src={asideImg2} alt={'aside image'} />
          <div className={style.aboutSubContent3}>
            <h3>We're knowledgeable about
              build your dream project...</h3><br />
            <p>The dedication and commitment of Shreehari Associates (P) Ltd., a well-known construction company goes far beyond the excellence in workmanship and time bound achievements. We would like to see our client at satisfaction, every time we complete a phase. We have prudence our human resource to deliver results with a clocklike precision, as the CONSTRUCTION is the fuel of our working.</p>
          </div>
        </div>
      </div>
      <div className={style.surveyer1}>
        <div className={style.surveyer2}>
          <div className={style.surveyerText}>
            <h4>Great<i> Experience </i>for</h4>
            <h2>About Skyline
               is a fastest growing company in the field of civil Engineering, in
              Roadways, Railways, Irrigation and heavy Earth moving equipment
              Machinery, having registered office of Mumbai and Parbhani.</h2>
          </div>
        </div>
      </div>
      <div className={style.vision} >
        <img src={ourVision} alt={'our-vision'} />
        <div className={style.visionText}>
          <h2>Our Vision</h2>
          <p>“As a construction company, our vision is to be a leading provider of high-quality, sustainable, and innovative construction solutions that meet the needs of our clients while also promoting the greater good of our community and the environment. We strive to exceed our clients' expectations by delivering exceptional value and service through our team's expertise, dedication, and passion for excellence. We envision a future where our projects not only meet the highest standards of quality and safety but also make a positive impact on the communities in which they are built. Our commitment to sustainability and environmentally responsible practices is a cornerstone of our vision, as we believe that the construction industry can and should play a significant role in building a more sustainable and equitable future for all.”</p><br />
        </div>
      </div>
      <div className={style.mission}>
        <img src={ourMission} alt={'our-mission'} />
        <div className={style.missionText}>
          <h2>Our Mission</h2>
          <p>Our mission as a construction company is to provide our clients with reliable, efficient, and cost-effective construction solutions that exceed their expectations. We are committed to delivering projects on time and within budget, while also maintaining the highest standards of quality and safety. We strive to build strong relationships with our clients, employees, subcontractors, and suppliers, based on honesty, integrity, and mutual respect. We aim to be a company that our clients can trust to deliver exceptional results, time and time again. In addition, we are committed to promoting sustainability in everything we do, from our building practices to our daily operations. We believe that by incorporating sustainable practices into our business model, we can help create a better future for ourselves, our clients, and the communities we serve. Overall, our mission is to be a construction company that is known for its excellence, reliability, and commitment to sustainability.</p>
        </div>

      </div>
    </>
  )
}

export default About
import React from 'react'
import style from './About.module.scss'
import sideimg from '../../images/company-pic.jpg'
import img3 from '../../images/construction-background.jpg'
import imgAbout from '../../images/about.jpeg'
import asideImg from '../../images/about-aside-image2.jpg'
import asideImg2 from '../../images/aside-image2.jpg'
import 'animate.css';



function About() {
  return (
    <>
      <div className={style.mainAbout1}>
        <div className={style.mainAbout2}>
          <div className={style.heading}>
            <h1 className={style.textFromRight}><i>Skyline construction &</i></h1>
            <h1 className={style.textFromRight}><i></i>Engineers pvt ltd</h1>
          </div>
          <img src={imgAbout} />
        </div>
        <div className={style.mainAbout3}>
          <div className={style.paraImg}>
            <img src={asideImg} alt={'company pic'} />
            <div className={style.para}>
              <h3>Who we are</h3>
              <br />
              <p>L&T Construction is a division of Larsen & Toubro (L&T) a major Indian technology, engineering, construction, manufacturing and financial services conglomerate, with global operations. L&T addresses critical needs in key sectors - Hydrocarbon, Infrastructure, Power, Process Industries and Defence - for customers in over 30 countries around the world. L&T is engaged in core high impact sectors of the economy and our integrated capabilities span the entire spectrum of 'design to deliver'. With over 8 decades of a strong, customer focused approach and a continuous quest for world-class quality, we have unmatched expertise across Technology, Engineering, Construction, Infrastructure Projects and Manufacturing.</p>

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
            <h2>Building The World more Stronger</h2>
          </div>
        </div>
      </div>
      <div >
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><br />
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </div>

    </>
  )
}

export default About
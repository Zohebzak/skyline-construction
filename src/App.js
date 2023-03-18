// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import companypic from './images/company-pic.jpg'

function App() {
  return (
    <>
      <header style={{ textAlign: 'center' }}>SKYLINE CONSCTRUCTIONS AND ENGENEERS PVT LTD</header>
      <div className='main-div1'>
        <ul classNameName='nav'>
          <li><a href='#'>CONTACT US</a></li>
          <li><a href='#'>OUR STRENGTH</a></li>
          <li><a href='#'>OUR PROJECTS</a></li>
          <li><a href='#about'>ABOUT US</a></li>
          <li><a href='#'>HOME </a></li>
        </ul>
        <p className='about-head'><b>About us</b></p>
      </div>
      <div id='about' className='para-aboutus'>
        <h4>About us</h4>
        <p><i><b>Skyline Contractors And Engineers Private Limited</b> is a newly incorporated company. The company is having following credentials:</i></p>
        <p>The company is promoted by Shri. Iraj Siddiqui Ifteqaroddin Siddiqui & Shri. Meraj Siddiqui Ifteqaroddin Siddiqui. Both the promoter/directors are experienced civil contractors and have in-depth knowledge of the field of civil construction. Shri. Iraj Siddiqui Ifteqaroddin Siddiqui is the Chairman and Managing Director of the company. He is the proprietor of Skyline Construction, a sole proprietorship entity. He is a young and dynamic entrepreneur. He started the work of contractorship in the year 2014. He is a Graduate (B.Tech) from Marathwada Agricultural University. He started his contractorship business with sub contracts from various entities and gradually gained experience and expertise</p>
        <br />

        <p>Considering the growth and ever increasing scope for the committed and quality works, he has decided to go in for corporate form of organisation to overcome the limitations of sole proprietorship. The newly formed company will apply for new work bids on the basis of experience, expertise, credentials, technical capacity and financial capacity of the erstwhile sole proprietorship. Henceforth, all new tender applications will be made by the company and the sole proprietorship will continue the on-going works till the completion of the same.

        </p>
        <img src={companypic} alt='company' />

      </div>

    </>
  );
}

export default App;

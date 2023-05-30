import React from 'react'
import SlideShow from './slideshow/SlideShow'
import Footer from '../../components/footer/Footer'

function Home() {
 const  slides=[
    {url:'./images/image1.jpeg'},
    {url:'./images/image2.jpeg'},
    {url:'./images/image3.jpeg'},
    {url:'./images/image4.jpeg'},
    {url:'./images/image5.jpeg'},
    
  ]
  return (
    <>
      <SlideShow slides={slides}/>
      {/* <img src={require('./images/image1.jpeg')}/>x */}
      {/* <Info/> */}
     
    </>
  )
}

export default Home
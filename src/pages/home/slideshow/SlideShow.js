import React, { useRef , useEffect, useState } from 'react';
import Cards from '../Cards';
import Info from '../info/Info';
import './SlideShow.scss'






function SlideShow({slides}) {
    // console.log(slides[0].url);
    const [currentIndex,setCurrentIndex]=useState(0)
    // const { id } = useParams();
const nextSlide =()=>{
    setCurrentIndex((currentIndex) => (currentIndex + 1) % slides.length)
}
const preSlide =()=>{
    setCurrentIndex(currentIndex === 0 ? 4 : currentIndex - 1 )
}
useEffect(() => {
    // Set an interval to change the current image every 3 seconds
    const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
}, []);

   
    return (
        <>
      {/* <img src={require(`${slides[0].url}`)}/> */}
      {/* <img src={require('./images/image1.jpeg')}/> */}

            {/* <div>
                <ul className="slideshow">
                    <li><span>hello world </span></li>
                    <li><span>hello world</span></li>
                    <li><span>hello world</span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
                <p>lodsdfsdas</p>
            </div> */}
            <main className="main-content">
                <section className="slideshow">
                    <div className="slideshow-inner">
                        <div className="slides">
                            <div className="slide is-active" >
                                <div className="slide-content">
                                    <div className="caption">
                                        <div className="title">Slide title {currentIndex}</div>
                                        <div className="text">
                                            <p>Slide description 1</p>
                                        </div>
                                        <a href="#" className="btn">
                                            <span className="btn-inner">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="image-container">
                                    <img src={require(`${slides[currentIndex].url}`)} alt="" className="image" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="pagination">
                            <div className="item is-active">
                                <span className="icon">1</span>
                            </div>
                            <div className="item">
                                <span className="icon">2</span>
                            </div>
                            <div className="item">
                                <span className="icon">3</span>
                            </div>
                            <div className="item">
                                <span className="icon">4</span>
                            </div>
                        </div>
                        <div className="arrows">
                            <div className="arrow prev">
                                <span className="svg svg-arrow-left" onClick={preSlide}>
                                    <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26"  > <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z" /> </svg>
                                    <span className="alt sr-only"></span>
                                </span>
                            </div>
                            <div className="arrow next">
                                <span className="svg svg-arrow-right" onClick={nextSlide}>
                                    <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26"  > <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z" /> </svg>
                                    <span className="alt sr-only"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Info/>
            {/* <Cards/> */}

        </>
    )
}

export default SlideShow
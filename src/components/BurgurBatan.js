import React, { useEffect, useRef, useState } from 'react';
import './BurgurBatan.css';
import { Link } from 'react-router-dom';


export  const  BurgurButton = ( props )=> {
  const [current, setCurrent] = useState(0);
  const [currentState, setCurrentState] = useState(false);
  const sideNavRef = useRef(null);
  const navigation = [
    { name: 'Home', href: '' },
    { name: 'about', href: 'about' },
    { name: 'contact', href: 'contact' },
    { name: 'strength', href: 'strength' },
    { name: 'Pravicy Policy', href: 'PravicyPolisy' },
     { name: 'ContactUs', href: 'ContactUs' },
    { name: 'Course ', href: 'Diploma' },
    { name: 'Student login', href: 'Studentlogin' },  
    { name: 'Press Realese', href: 'PressRelease' },  
  ];

  useEffect(()=>{
    if(currentState){
      document.getElementById("mySidenav").style.width = "38vh";
    }else{
      document.getElementById("mySidenav").style.width = "0";
    }
  },[currentState])
  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);
  function openNav(e) {
    setCurrentState(e.target.checked)


}
// const handleClickOutside = (event) => {
//   if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
//     closeNav();
//   }
// };
const closeNav = () => {
  setCurrentState(false);
};


const handleHover = (index) => {
    setCurrent(index);
    setCurrentState(false);
    // closeNav()
  };
  return (
    <>
                <div className='burger-container' >

                <label className="burger left-4 "  for="burger"  >
                        <input type="checkbox" id="burger" checked={currentState} onChange={openNav}/>
                      <span style={{background:'#001f5f'}}></span>
                    <span style={{background:'red'}}></span>
                         <span style={{background:'#001f5f'}} ></span>
                   </label>
                </div>

                <div id="mySidenav" className="sidenav"  ref={sideNavRef}>
  {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> */}
  {navigation.map((item, index) => (
    <>

        <Link
                  to={`/${item.href}`}
                  style={{
                   background: index === current && "grey",color:'#001f5f'
                  }}
                  key={item.name}
                 
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => handleHover(index)}
                >
                  {item.name}
                </Link>
                
                
                </>
              ))}

</div>

      
    </>
  );
};
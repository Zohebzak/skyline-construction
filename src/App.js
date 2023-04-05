
import './App.css';
import Navbar from './components/Navbar/Navbar';
import companypic from './images/company-pic.jpg'
import React from 'react';
import {
  createBrowserRouter, RouterProvider, createRoutesFromElements,
  Route
} from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Root from './components/root/Root';
import ContactUs from './pages/contact us/ContactUs';
import Login from './components/loginpage/Login';
import OurStrength from './components/ourStrength/OurStrength';
import Completed from './components/projects/Completed';
import OnGoing from './components/projects/OnGoing';

function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Root/>}>
        <Route path='/'element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/strength' element={<OurStrength/>}/>
        <Route path='/completed' element={<Completed/>}/>
        <Route path='/OnGoing' element={<OnGoing/>}/>
        <Route path='/login' element={<Login/>}/>


        </Route>
        
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>


    </>
  );
}

export default App;


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
import AdminRoutes from './components/root/Admin';
import Gallery from './components/footer/Gallery';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
function App() {
  const [theme, colorMode] = useMode();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
<<<<<<< HEAD
=======
        <Route path='/login' element={<Login />} />
        <Route element={<AdminRoutes />}>
          <Route path='/Employes' element={<Completed />} />
          <Route path='/admin' element={<OnGoing />} />
        </Route>

>>>>>>> f1e22e5f0faf7f6ef4fe3e4d2d654f319f1e0cc2
        <Route element={<Root />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/strength' element={<OurStrength />} />
          <Route path='/completed' element={<Completed />} />
          <Route path='/OnGoing' element={<OnGoing />} />
          <Route path='/login' element={<Login />} />
<<<<<<< HEAD
=======
          <Route path='/Gallery' element={<Gallery/>} />



>>>>>>> f1e22e5f0faf7f6ef4fe3e4d2d654f319f1e0cc2
        </Route>

      </Route>
    )
  )
  return (
    <>
     <ThemeProvider theme={theme}>
        <CssBaseline />
      <RouterProvider router={router}>

      </RouterProvider>
      </ThemeProvider>

     
    </>
  );
}

export default App;


import './App.css';
import Navbar from './components/Navbar/Navbar';
import companypic from './images/company-pic.jpg'
import {
  createBrowserRouter, RouterProvider, createRoutesFromElements,
  Route
} from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Root from './components/root/Root';
import ContactUs from './pages/contact us/ContactUs';

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Root/>}>
        <Route path='/'element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>}/>

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

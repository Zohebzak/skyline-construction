import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Sidebar from '../sideBar/SideBar'
import { Box, useMediaQuery } from '@mui/material'
// import Navbar from '../Navbar/Navbar'

function AdminRoutes() {
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <>
     <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
     
        <Outlet />
      </Box>
    </Box>
      {/* <Outlet/>
      <Footer/> */}

        
    </>
  )
}

export default AdminRoutes
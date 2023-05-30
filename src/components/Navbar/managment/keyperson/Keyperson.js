import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

export default function FormPropsTextFields() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme?.breakpoints?.down('sm'))
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45%' },
      }}
      style={{
        display: "flex", flexDirection: "column", alignItems: 'center', margin: '0',
        marginTop: '2rem', gap: '1rem'
      }}
      noValidate
      autoComplete="off"
    >

     
        <div style={{ width: isMobile ? "" : '75%' }}>
          <TextField id="outlined-search" label="First Name" type="search" />
          <TextField id="outlined-search" label="Last Name" type="search" />

        </div>
        <div style={{ width: isMobile ? "" : '75%' }}>
          <TextField id="outlined-search" label="Qulification" type="search" />
          <TextField id="outlined-search" label="" type="date" />

        </div>
        <div style={{ width: isMobile ? "" : '75%' }}>
          <TextField id="outlined-search" label="Applying for" type="search" />
          <TextField id="outlined-search" label="Total years of experience" type="search" />

        </div>
        <div style={{ width: isMobile ? "" : '75%' }}>
          <TextField id="outlined-search" label="Conatct No" type="number" />
          <TextField id="outlined-search" label="Currrent Orginaization" type="search" />

        </div>
        <div style={{ width: isMobile ? "" : '75%' }}>
          <TextField id="outlined-search" label="Current profile" type="search" />
          <TextField id="outlined-search" label="Last Drawn Salary" type="search" />

        </div>
        <div style={{ width: isMobile ? "" : '75%' }}>
          <TextField id="outlined-search" label="Expected Salary" type="search" />
          <TextField id="outlined-search" label="" type="file" placeholder='upload resume' />

        </div>
        <div>
        <button >Submit</button>
        </div>
    
    </Box>
  );
}
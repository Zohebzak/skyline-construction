import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

export default function FormPropsTextFields() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme?.breakpoints?.down('sm'))
  const [data, setData] = React.useState({
    // firstname: '',
    // lastname: '',
    // qulification: '',
    // date: '',
    // applyingfor: '',
    // totalexperience: '',
    // contactno: '',
    // currentorginaization: '',
    // currentprofile: '',
    // lastsalary: '',
    // expectedsalary: '',
    // uploadresume: ''

  })
  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
    // let helper = e[event.target.value] = event.target.value
    // return helper

  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
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
        <TextField id="outlined-search" name='firstname' onChange={handleChange} value={setData.firstname} label="First Name" type="search" />
        <TextField id="outlined-search" name='lastname' onChange={handleChange} value={setData.lastname} label="Last Name" type="search" />

      </div>
      <div style={{ width: isMobile ? "" : '75%' }}>
        <TextField id="outlined-search" name='qulification' onChange={handleChange} value={setData.qulification} label="Qulification" type="search" />
        <TextField id="outlined-search" name='date' onChange={handleChange} value={setData.date} label="" type="date" />

      </div>
      <div style={{ width: isMobile ? "" : '75%' }}>
        <TextField id="outlined-search" name='applyingfor' onChange={handleChange} value={setData.applyingfor} label="Applying for" type="search" />
        <TextField id="outlined-search" name='totalexperience' onChange={handleChange} value={setData.totalexperience} label="Total experience" type="search" />

      </div>
      <div style={{ width: isMobile ? "" : '75%' }}>
        <TextField id="outlined-search" name='contactno' onChange={handleChange} value={setData.contactno} label="Conatct No" type="number" />
        <TextField id="outlined-search" name='currentorginaization' onChange={handleChange} value={setData.currentorginaization} label="Currrent Orginaization" type="search" />

      </div>
      <div style={{ width: isMobile ? "" : '75%' }}>
        <TextField id="outlined-search" name='currentprofile' onChange={handleChange} value={setData.currentprofile} label="Current profile" type="search" />
        <TextField id="outlined-search" name='lastsalary' onChange={handleChange} value={setData.lastsalary} label="Last Drawn Salary" type="search" />

      </div>
      <div style={{ width: isMobile ? "" : '75%' }}>
        <TextField id="outlined-search" name='expectedsalary' onChange={handleChange} value={setData.expectedsalary} label="Expected Salary" type="search" />
        <TextField id="outlined-search" name='uploadresume' onChange={handleChange} value={setData.uploadresume} label="" type="file" placeholder='upload resume' />

      </div>
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>

    </Box>
  );
}
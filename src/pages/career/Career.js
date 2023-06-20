import React from 'react'
import './Career.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

function Career() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme?.breakpoints?.down('sm'))
    const [data, setData] = React.useState({
        firstname: '',
        lastname: '',
        qulification: '',
        date: '',
        applyingfor: '',
        totalexperience: '',
        contactno: '',
        currentorginaization: '',
        currentprofile: '',
        lastsalary: '',
        expectedsalary: '',
        uploadresume: ''

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
        <>
            <div className='career-main'>
                <div className='career-text'>
                    <h4>"Constructing Dreams: Explore Exciting Career Opportunities with Us"</h4>
                    <p>
                        "At our construction company, we believe in nurturing talent and providing a platform for growth. Join our team of dedicated professionals, where you can unleash your potential, contribute to exciting projects, and build a rewarding career in the dynamic world of construction. Whether you're an experienced industry veteran or just starting your journey, we offer diverse opportunities and a supportive environment for you to thrive."</p>
                </div>
                <div className='career-form p-2' >

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '45%' ,height:'3vh'},
                            '& .MuiInputBase-input':{height:'2.5rem' ,width:'18rema'}
                        }}
                        style={{
                            display: "flex", flexDirection: "column", alignItems: 'center', margin: '0',
                            marginTop: '2rem', gap: '2rem',border:'1px solid black',
                            borderRadius:'5px'
                        }}
                        noValidate
                        autoComplete="off"
                    >


                        <div style={{ width: isMobile ? "" : '75%' }}>
                        <TextField id="outlined-search" name='expectedsalary' onChange={handleChange} value={data.expectedsalary} label="Expected Salary" type="search" />
                        <TextField id="outlined-search" name='expectedsalary' onChange={handleChange} value={data.expectedsalary} label="Expected Salary" type="search" />

                        </div>
                        <div style={{ width: isMobile ? "" : '75%' }}>
                            <TextField id="outlined-search" name='qulification' onChange={handleChange} value={data.qulification} label="select Qulification" type="search" />
                            <TextField id="outlined-search" name='date' onChange={handleChange} value={data.date} label="" type="date" />

                        </div>
                        <div style={{ width: isMobile ? "" : '75%' }}>
                            <TextField id="outlined-search" name='applyingfor' onChange={handleChange} value={data.applyingfor} label="Applying for" type="search" />
                            <TextField id="outlined-search" name='totalexperience' onChange={handleChange} value={data.totalexperience} label="Total experience" type="search" />

                        </div>
                        <div style={{ width: isMobile ? "" : '75%' }}>
                            <TextField id="outlined-search" name='contactno' onChange={handleChange} value={data.contactno} label="Conatct No" type="number" />
                            <TextField id="outlined-search" name='currentorginaization' onChange={handleChange} value={data.currentorginaization} label="Currrent Orginaization" type="search" />

                        </div>
                        <div style={{ width: isMobile ? "" : '75%' }}>
                            <TextField id="outlined-search" name='currentprofile' onChange={handleChange} value={data.currentprofile} label="Current profile" type="search" />
                            <TextField id="outlined-search" name='lastsalary' onChange={handleChange} value={data.lastsalary} label="Last Drawn Salary" type="search" />

                        </div>
                        <div style={{ width: isMobile ? "" : '75%' }}>
                            <TextField id="outlined-search" name='expectedsalary' onChange={handleChange} value={data.expectedsalary} label="Expected Salary" type="search" />
                            <TextField id="outlined-search" name='uploadresume' onChange={handleChange} value={data.uploadresume} label="" type="file" placeholder='upload resume' />

                        </div>
                        <div style={{ width: isMobile ? "" : '75%' }}>
                            <TextField id="outlined-search" name='expectedsalary' onChange={handleChange} value={data.expectedsalary} label="Expected Salary" type="search" />
                            <TextField id="outlined-search" name='expectedsalary' onChange={handleChange} value={data.expectedsalary} label="Expected Salary" type="search" />
                        </div>
                      
                            <button style={{marginRight: isMobile ? '' : '3rem' , marginBottom:'1rem'}} onClick={handleClick}>Submit</button>
                      

                    </Box>
                </div>
            </div>
        </>
    )
}

export default Career

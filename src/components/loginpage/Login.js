import React, { useState } from 'react'
import "./Login.scss"
import img from '../../images/SkylineLogo2png.png'

function Login() {
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    const handleOnChange = (event) => {
        setInput((prev) => {
            let helper = { ...prev }
            helper[event.target.name] = event.target.value
            return helper
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(input);
    }

    return (
        <>

            <div>
                <div className='mai_div'>
                    <div>
                        <img src={img} alt='' width={"100px"} />
                        <h3 className='text_area'>Skyline Construction PVT LTD</h3>
                    </div>
                    <div className='inputs'>
                        <input type='email' placeholder='Email Id' className='input-items' onChange={handleOnChange} name='email' value={input.email} />
                        <input type='password' placeholder='Password' className='input-items' onChange={handleOnChange} name='password' value={input.password} />
                    </div>
                    <div className='sing_btn' onClick={handleOnSubmit}>
                        <button>Login</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login

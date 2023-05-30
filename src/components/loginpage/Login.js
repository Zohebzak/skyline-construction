import React, { useState } from 'react'
import "./Login.scss"
import img from '../../images/SkylineLogo2png.png'
import { useNavigate } from 'react-router-dom'
import loginPic from '../../images/our_vision2.jpg'

function Login() {
    // const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()
    return (
        <>

            <div>
                <div className='mai_div'>
                    <div className='login-pic'>
                        <img src={loginPic} />
                    </div>
                    <div className='login-form'>
                        <div>
                            <img src={img} alt='' width={"100px"} onClick={() => {
                                navigate("/")
                            }} />
                            <h3 className='text_area'>Skyline Construction PVT LTD</h3>
                        </div>
                        <div className='inputs'>
                            <input type='email' placeholder='Email Id' className='input-items' />
                            <input type='password' placeholder='Password' className='input-items' />
                        </div>
                        <div className='sing_btn'>
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login

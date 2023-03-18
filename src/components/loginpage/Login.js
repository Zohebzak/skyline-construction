import React,{useState} from 'react'
import "./Login.scss"
import img from '../../images/SkylineLogo2png.png'

function Login() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <>
            {isLogin ?
                <div className='mai_div'>
                    <div>
                        <img src={img} alt='' width={"100px"} />
                        <h3 className='text_area'>Skyline Construction PVT LTD</h3>
                        <div className='btn_invitation'>
                            <button className='button-singup' onClick={() => setIsLogin(true)}>Sing Up</button>
                            <button className='button-login' onClick={() => setIsLogin(false)}>Login</button>
                        </div>
                    </div>
                    <div className='inputs'>
                        <input type='text' placeholder='Name' className='input-items' />
                        <input type='email' placeholder='Email' className='input-items' />
                        <input type='password' placeholder='Password' className='input-items' />
                    </div>
                    <div className='sing_btn'>
                        <button>Sing Up</button>
                    </div>
                    <div className='line_text'>
                        <div></div>
                        <div>OR</div>
                        <div></div>
                    </div>
                    
                </div>
                : <div>
                    <div className='mai_div'>
                        <div>
                        <img src={img} alt='' width={"100px"} />
                            <h3 className='text_area'>Skyline Construction PVT LTD</h3>
                            <div className='btn_invitation'>
                                <button className='button-singup' style={{ backgroundColor: '#FFFFFF', color: '#64070A' }} onClick={() => setIsLogin(true)}>Sing Up</button>
                                <button className='button-login' style={{ backgroundColor: 'skyblue', color: '#FFFFFF' }} onClick={() => setIsLogin(false)}>Login</button>
                            </div>
                        </div>
                        <div className='inputs'>
                            <input type='email' placeholder='Email Id' className='input-items' />
                            <input type='password' placeholder='Password' className='input-items' />
                        </div>
                        <div className='sing_btn'>
                            <button>Login</button>
                        </div>
                        <div className='line_text'>
                            <div></div>
                            <div>OR</div>
                            <div></div>
                        </div>
                        
                    </div>
                </div>
            }
        </>
    )
}

export default Login

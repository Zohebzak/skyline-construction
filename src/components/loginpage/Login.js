import React,{useState} from 'react'
import "./Login.scss"
import img from '../../images/SkylineLogo2png.png'

function Login() {
    // const [isLogin, setIsLogin] = useState(true)

    return (
        <>
                
                 <div>
                    <div className='mai_div'>
                        <div>
                        <img src={img} alt='' width={"100px"} />
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
            
        </>
    )
}

export default Login

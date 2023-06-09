import React, { useState } from 'react'
import "./Login.scss"
import img from '../../images/SkylineLogo2png.png'
import { useNavigate } from 'react-router-dom'
import loginPic from '../../images/our_vision2.jpg'
import { AdminLoginService } from '../../services/admin.service'

function Login() {
    const navigate = useNavigate()

    // const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   

    const handleOnClick = async(e) => {
            e.preventDefault()
            const data = await AdminLoginService({email,password})
                console.log(data.data)
                if(data.data.status === 400){
               alert("err");
                }else{
                  const objString = JSON.stringify(data.data);
                  localStorage.setItem("user" ,objString)
                  navigate("/admin")
                }
              
              // const data= await  AdminLoginService()
            
    }
    //   {
  //     "email":"Sheraz@gmail.in",
  //     "password":"Sheraz@123"

  // }
    return (
        <>

            <div>   
                <div className='mai_div'>
                    <div className='login-pic' style={{ marginLeft: '2rem' }}>
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
                            <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Id' className='input-items' />
                            <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='input-items' />
                        </div>
                        <div className='sing_btn'>
                            <button onClick={handleOnClick}>Login</button>
                           
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login

import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
const Login = () => {

  const [signState, setSignState] = useState('Sign In')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth =async (event)=>{
    // ngắn chăn from tải lại trang và gửi biểu mẫu
    event.preventDefault();
    if(signState==='Sign In'){
      await login(email, password)
    }else{
      await signup(name, email, password)
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo'/>
      <div className='login-form'>
          <h1>{signState}</h1>
          <form>
          {signState === "Sign Up"?
            <input  type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your name'/>:<> </>}
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
            <button onClick={user_auth} type='submit' >{signState}</button>
            <div className='font-help'>
              <div className='remember'>
                <input type='checkbox'/>
                <label>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className='from-switch'>
          {signState === "Sign In"?
          <p>New to Netflix? <span onClick={()=>setSignState("Sign Up")}>Sign up Now</span></p>
          : <p>Already have account? <span onClick={()=>setSignState("Sign In")}>Sign In Now </span></p>
          }
          </div>
        </div>
      </div>
    
  )
}

export default Login
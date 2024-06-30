import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'

const login = () => {

  const [signState, setSignState] = useState('Sign In')
  return (
    <div className='login'>
      <img src={logo} className='login-logo'/>
      <div className='login-form'>
          <h1>{signState}</h1>
          <form>
          {signState === "Sign Up"?<input type='text' placeholder='Your name'/>:<> </>}
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button>{signState}</button>
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

export default login
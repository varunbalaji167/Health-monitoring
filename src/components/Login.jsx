import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faNotesMedical,faUser,faLock} from '@fortawesome/free-solid-svg-icons'
import './Login.css'

const Login = () => {
  return (<center>
    <div className="logo"><h1><FontAwesomeIcon icon={faNotesMedical} /></h1></div>
    <div className="Container">
    <div className="title"><h1>LogIn</h1></div>
    <div className="containr inp">
        <div className="inputBox">
          <input type="text" placeholder="Username" name="Username"></input>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Password" name="Password"></input>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="rem-for">
          <div className="rem"><input type="checkbox" id="remember"></input>Remember be</div>
          <a href="/forgetpassword" id="forgetPassword" >forget password</a>
        </div>
        <button class="btn btn-primary" type="button">LogIn</button>
        <p className='existAccount'>Don't have an account? <a href='/signup' className='linkLogin'>Register</a></p>
    </div></div>
    </center>
  )
}

export default Login
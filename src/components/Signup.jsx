import React from 'react'
import './Signup.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faSuitcaseMedical, faUser,faNotesMedical} from '@fortawesome/free-solid-svg-icons'

const Signup = () => {
  return (<center>
    
    <div className="logo"><h1><FontAwesomeIcon icon={faNotesMedical} /></h1></div>
    <div className="Container">
      <div className="title"><h1>Sign Up</h1></div>
      <div className="containr inp">
        <div className="inputBox">
          <input type="text" placeholder="Username" name="Username"></input>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Password" name="Password"></input>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Confirm Password" name="cPassword"></input>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Email" name="Email"></input>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Role" name="Role"></input>
          <FontAwesomeIcon icon={faSuitcaseMedical} />
        </div>
        <button class="btn btn-primary" type="button">Register</button>
        <p className='existAccount'>Already have an account? <a href='/login' className='linkLogin'>login</a></p>
      </div>
    </div>
    </center>
  )
}

export default Signup
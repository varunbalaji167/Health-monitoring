import React from 'react'
import './Signup.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faSuitcaseMedical, faUser,faNotesMedical} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useState } from 'react'
import Doctor from './Doctor'
import Dataentry from './Dataentry'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const navigate=useNavigate();
  const checkpassword=()=>{
    if(username !== "" && email !== "" && password !== ""){
    if(password===cpassword ){
      console.log(username,password,cpassword,email,role)
      alert("Your account got created");
      if(role==="doctor"){
      navigate("/doctor")}
      if(role==="nurse"){
        navigate("/nurse")
      }
    }}
    else{
      alert("Can't register and enter details properly")
      console.log(username,password,cpassword,email,role)
      
    }
  }
  return (<><center>
    <div className="logo"><h1><FontAwesomeIcon icon={faNotesMedical} /></h1></div>
    <div className="Container">
      <div className="title"><h1>Sign Up</h1></div>
      <div className="containr inp">
        <div className="inputBox">
          <input type="text" placeholder="Username" name="Username" value={username}onChange={(e)=>{setUsername(e.target.value)}}></input>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Password" name="Password" value={password}onChange={(e)=>{setPassword(e.target.value)}}></input>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Confirm Password" name="cPassword" value={cpassword}onChange={(e)=>{setCpassword(e.target.value)}}></input>
          <FontAwesomeIcon icon={faLock} />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Email" name="Email" value={email}onChange={(e)=>{setEmail(e.target.value)}}></input>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="inputBox">
            <select
            className="occp"
              name="Role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Occupation</option>
              <option value="doctor">Doctor</option>
              <option value="nurse">Nurse</option>
            </select>
          <FontAwesomeIcon icon={faSuitcaseMedical} />
        </div>
        <button className="btn btn-primary" type="button" onClick={checkpassword}>Register</button>
        <p className='existAccount'>Already have an account? <Link to='/login' className='linkLogin'>login</Link></p>
      </div>
    </div>
    </center>
    </>
  )
}

export default Signup
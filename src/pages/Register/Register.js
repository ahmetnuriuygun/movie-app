import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../img/images.jpeg"
import "./Register.css"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../../auth/firebase"

const Register = () => {

  const [registerEmail,setRegisterEmail] = useState("")
  const [registerPassword,setRegisterPassword] = useState("")

  

  const register = async (e) => {
    e.preventDefault(e)
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user);
    } catch (error){
      console.log(error.message );
    }
    
    
  }


  return (
    <div className='d-flex justify-content-evenly pt-5 loginpage'>
    <div>
      <img src={img}/>
    </div>

    <div className='d-flex flex-column loginform pt-5'>
      <h1 className='display-3'>Sign In</h1>
      <form onSubmit={register}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email"  placeholder="Enter your email adress" onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>{setRegisterPassword(e.target.value)}} />
          </div>

          <div>
            <button type="submit" className="btn btn-primary btn-m btn-block">SIGN IN</button>
          </div>

          
      </form>
    </div>


</div>
  )
}

export default Register
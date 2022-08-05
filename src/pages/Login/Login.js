import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../img/images.jpeg"
import "./Login.css"
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../../auth/firebase"


const Login = () => {

  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword,setLoginPassword] = useState("")


  const login = async (e) =>{
    e.preventDefault()
      try{
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        );
        console.log(user);
      } catch(error){
        console.log(error.message);
      }
  }



  return (
    
      <div className='d-flex justify-content-evenly pt-5 loginpage'>
          <div>
            <img src={img}/>
          </div>

          <div className='d-flex flex-column loginform pt-5'>
            <h1 className='display-3'>Log In</h1>
            <form onSubmit={login}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email"  placeholder="Enter your email adress" onChange={(e)=>{setLoginEmail(e.target.value)}}/>
                </div>

                <div className="form-group">
                  <label htmlfor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e)=>{setLoginPassword(e.target.value)}}/>
                </div>

                <div>
                  <button type="submit" className="btn btn-primary btn-m btn-block">Log In</button>

                </div>
                <div>
                  <button type="submit" className="btn btn-primary btn-m btn-block">Continue with Google</button>
                </div>

                
            </form>
          </div>


      </div>
    
  )
}

export default Login
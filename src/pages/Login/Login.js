import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../img/images.jpeg"
import "./Login.css"


const Login = () => {
  return (
    
      <div className='d-flex justify-content-evenly pt-5 loginpage'>
          <div>
            <img src={img}/>
          </div>

          <div className='d-flex flex-column loginform pt-5'>
            <h1 className='display-3'>Login</h1>
            <form>
                <div class="form-group">
                  <label htmlfor="email">Email address</label>
                  <input type="email" class="form-control" id="email"  placeholder="Enter your email adress"/>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
                </div>

                <div>
                  <button type="submit" class="btn btn-primary btn-m btn-block">LOG IN</button>
                </div>

                <div>
                  <button type="submit" class="btn btn-primary btn-m btn-block">Continue with Google</button>
                </div>
            </form>
          </div>


      </div>
    
  )
}

export default Login
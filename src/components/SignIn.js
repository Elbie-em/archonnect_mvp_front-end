import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="auth-container">
    <div className="container text-center">
      <div className="empty-div"></div>
      <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
      <h1 className="custom-font-b">Sign In</h1>
      <p className="custom-font-b xs-font">
        Hello there <br />
          Sign in and begin your bid on house plans
        </p>
      <form>
        <div className="form-group">
          <label className="w-50 custom-font-b">
            Email
              <input className="form-control rounded-pill" type="email" name="email" />
          </label>
        </div>
        <div className="form-group">
          <label className="w-50 custom-font-b">
            Password
              <input className="form-control rounded-pill" type="password" name="password" />
          </label>
        </div>
        <button className="auth-btn mt-2 rounded-pill" type='submit'>Sign In</button>
      </form>
      <p className="custom-font-b xs-font mt-5">
       Dont have an account? 
      <Link to={"/signup"}>Sign Up</Link>
      </p>
    </div>
  </div>
  )
}

export default SignIn

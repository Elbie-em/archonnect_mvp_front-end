import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createUser, checkUser, checkLoggedInStatus } from '../redux'
import _ from 'lodash'


const SignUp = ({ history, status, isLoggedIn, checkUser, createUser }) => {

  useEffect(() => {
    isLoggedIn()
  }, [isLoggedIn])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    const userData = {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    }

    checkUser(email).
      then(response => {
        const data = response.payload
        if (!_.isEmpty(data.user)) {
          alert("User exists or passwords did not match, please try again!!!")
        } else {
          createUser(userData);
          history.push("/houseplans")
        }
      }).catch(e => {
        console.log(e)
      })

    event.preventDefault();
  }

  const showData = () => {
    if (status.logged_in) {
      return (
        <>
          <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
          <h1 className="custom-font-b">You are Already Logged In!!!</h1>
          <h5 className="custom-font-b"><Link to={"/"}><u>Go Home</u></Link></h5>
        </>
      )
    }
    else if (!status.logged_in) {
      return (
        <>
          <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
          <h1 className="custom-font-b">Sign Up</h1>
          <p className="custom-font-b xs-font">
            Welcome to Archonnect <br />
            Sign up and begin your bid on house plans
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="w-50 custom-font-b">
                Email
                <input className="form-control rounded-pill" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label className="w-50 custom-font-b">
                Password
                <input className="form-control rounded-pill" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label className="w-50 custom-font-b">
                Password confirmation
                <input className="form-control rounded-pill" type="password" name="password" value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
              </label>
            </div>
            <button className="auth-btn mt-2 rounded-pill" type='submit'>Sign Up</button>
          </form>
          <p className="custom-font-b xs-font mt-5">
            Already have an account?
        <Link to={"/signin"}>Sign In</Link>
          </p>
        </>
      )
    }
  }


  return (
    <>
      <div className="auth-container">
        <div className="container text-center">
          <div className="empty-div"></div>
          {showData()}
        </div>
      </div>

    </>
  )
}

const mapStateToProps = state => {
  return {
    status: state.loggedIn.data
  }
}


const mapDispatchToProps = dispatch => {
  return {
    checkUser: data => dispatch(checkUser(data)),
    createUser: data => dispatch(createUser(data)),
    isLoggedIn: () => dispatch(checkLoggedInStatus()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

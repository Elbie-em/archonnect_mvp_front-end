import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { createUser, checkUser, checkLoggedInStatus } from '../redux';

const SignUp = ({
  history, status, isLoggedIn, checkUser, createUser,
}) => {
  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passWordConfimation, setPasswordConfirmation] = useState('');

  const handleSubmit = event => {
    const userData = {
      user: {
        email,
        password,
        password_confimation: passWordConfimation,
      },
    };

    checkUser(email)
      .then(response => {
        const data = response.payload;
        if (!_.isEmpty(data.user)) {
          toast.error('User exists or passwords did not match, please try again!!!');
        } else {
          createUser(userData);
          toast.success('User created successfully');
          history.push('/houseplans');
        }
      }).catch(e => {
        toast.error(e);
      });

    event.preventDefault();
  };

  const showData = () => {
    if (status.logged_in) {
      return (
        <>
          <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
          <h1 className="custom-font-b">You are Already Logged In!!!</h1>
          <h5 className="custom-font-b"><Link to="/"><u>Go Home</u></Link></h5>
        </>
      );
    }
    if (!status.logged_in) {
      return (
        <>
          <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
          <h1 className="custom-font-b">Sign Up</h1>
          <p className="custom-font-b xs-font">
            Welcome to Archonnect
            {' '}
            <br />
            Sign up and begin your bid on house plans
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="w-50 custom-font-b">
                Email
                <input className="form-control rounded-pill" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="w-50 custom-font-b">
                Password
                <input className="form-control rounded-pill" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirmation" className="w-50 custom-font-b">
                Password confirmation
                <input className="form-control rounded-pill" type="password" name="passwordConfirmation" value={passWordConfimation} onChange={e => setPasswordConfirmation(e.target.value)} />
              </label>
            </div>
            <button className="auth-btn mt-2 rounded-pill" type="submit">Sign Up</button>
          </form>
          <p className="custom-font-b xs-font mt-5">
            Already have an account?
            <Link to="/signin">Sign In</Link>
          </p>
        </>
      );
    }

    return <></>;
  };

  return (
    <>
      <div className="auth-container">
        <div className="container text-center">
          <div className="empty-div">
            <ToastContainer />
          </div>
          {showData()}
        </div>
      </div>

    </>
  );
};

const mapStateToProps = state => ({
  status: state.loggedIn.data,
});

const mapDispatchToProps = dispatch => ({
  checkUser: data => dispatch(checkUser(data)),
  createUser: data => dispatch(createUser(data)),
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
});

SignUp.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
  status: PropTypes.arrayOf(PropTypes.object).isRequired,
  checkUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

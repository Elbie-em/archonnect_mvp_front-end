import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn, checkLoggedInStatus } from '../redux';

const SignIn = ({
  history, login, status, isLoggedIn,
}) => {
  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    const userData = {
      user: {
        email,
        password,
      },
    };

    login(userData)
      .then(response => {
        const res = response.payload;
        if (res.status === 'created' && res.logged_in) {
          setTimeout(() => {
            toast.success('Successfully signed in');
            history.push('/houseplans');
          }, 2000);
        } else if (res.status === 401) {
          toast.error('Enter a valid email or password');
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
          <h1 className="custom-font-b">Sign In</h1>
          <p className="custom-font-b xs-font">
            Hello there
            {' '}
            <br />
            Sign in and begin your bid on house plans
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="w-50 custom-font-b">
                Email
                <input className="form-control rounded-pill" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="w-50 custom-font-b">
                Password
                <input className="form-control rounded-pill" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
              </label>
            </div>
            <button className="auth-btn mt-2 rounded-pill" type="submit">Sign In</button>
          </form>
          <p className="custom-font-b xs-font mt-5">
            Dont have an account?
            <Link to="/signup">Sign Up</Link>
          </p>
        </>
      );
    }

    return <></>;
  };

  return (
    <div className="auth-container">
      <div className="container text-center">
        <div className="empty-div" />
        <ToastContainer />
        <div />
        {showData()}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  status: state.loggedIn.data,
});

const mapDispatchToProps = dispatch => ({
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
  login: data => dispatch(logIn(data)),
});

SignIn.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  status: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

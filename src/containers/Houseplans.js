import React, { useEffect } from 'react';
import _ from 'lodash';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkLoggedInStatus, getPlans, logout } from '../redux';
import '../styles/Hamnav.css';
import PlanCard from '../components/PlanCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Houseplans = ({
  history, loggedInStatus, isLoggedIn, plans, getPlans, logout,
}) => {
  useEffect(() => {
    getPlans();
    isLoggedIn();
  }, [getPlans, isLoggedIn]);

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      history.push('/signin');
    }, 3000);
  };

  const showONavLinks = () => {
    if (loggedInStatus.logged_in) {
      return (
        <>
          <li className="nav-item"><Link to="/houseplans">House Plans</Link></li>
          <li className="nav-item"><Link to="/favourites">Favourites</Link></li>
          <li className="nav-item">
            <button type="button" className="btn btn-start rounded-pill xs-font" onClick={handleLogout}>
              Logout&nbsp;&nbsp;
              <i className="fas fa-sign-out-alt" />
            </button>
          </li>
        </>
      );
    }

    return <></>;
  };

  const showPlans = () => {
    if (!_.isEmpty(plans.data.result) && plans.data.status === 200) {
      const res = plans.data.result;
      return (
        <>
          <div className="plans-container">
            {
              res.map(item => (
                <PlanCard
                  key={item.name}
                  id={item.id}
                  imgUrl={item.design_img_url}
                  name={item.name}
                  price={item.price}
                />
              ))
            }
          </div>
        </>
      );
    }
    if (plans.data.status === 401) {
      return (
        <>
          <div className="text-center">
            <h1 className="custom-font-b text-danger">401: Authorization Required</h1>
            <h5 className="custom-font-b"><Link to="/"><u>Go Home</u></Link></h5>
          </div>
        </>
      );
    }
    if (plans.loading) {
      return <LoadingSpinner />;
    }
    if (plans.errorMsg !== '') {
      return <p className="text-danger mt-5">{plans.errorMsg}</p>;
    }

    return <p className="text-danger mt-5">Error Loading Plans</p>;
  };

  return (
    <div>
      <ul className="navigation">
        <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
        <li className="nav-item"><Link to="/">Home</Link></li>
        {showONavLinks()}
      </ul>

      {/* eslint-disable  jsx-a11y/label-has-associated-control */}
      <input type="checkbox" id="nav-trigger" className="nav-trigger " />
      <label htmlFor="nav-trigger"><span className="hidden_nav" /></label>
      {/* eslint-enable  jsx-a11y/label-has-associated-control */}
      <div className="content-wrap">
        <ToastContainer />
        <h2 className="text-center custom-font-a plan-header">House Plans</h2>
        {showPlans()}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedInStatus: state.loggedIn.data,
  plans: state.plans,
});

const mapDispatchToProps = dispatch => ({
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
  getPlans: () => dispatch(getPlans()),
  logout: () => dispatch(logout()),
});

Houseplans.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  loggedInStatus: PropTypes.instanceOf(Object).isRequired,
  plans: PropTypes.instanceOf(Object).isRequired,
  getPlans: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Houseplans);

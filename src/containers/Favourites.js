import React, { useEffect } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FavCard from '../components/FavCard';
import { getFavourites, checkLoggedInStatus, logout } from '../redux';
import LoadingSpinner from '../components/LoadingSpinner';

const Favourites = ({
  history, loggedInStatus, isLoggedIn, favourites, getFavourites, logout,
}) => {
  useEffect(() => {
    getFavourites();
    isLoggedIn();
  }, [getFavourites, isLoggedIn]);

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

  const showFavourites = () => {
    if (!_.isEmpty(favourites.result) && favourites.status === 200) {
      const res = favourites.result;
      return (
        <>
          <div className="favourite-list">
            {
              res.map(item => (
                <FavCard
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
    if (favourites.status === 401) {
      return (
        <>
          <div className="text-center">
            <h1 className="custom-font-b text-danger">401: Authorization Required</h1>
            <h5 className="custom-font-b"><Link to="/"><u>Go Home</u></Link></h5>
          </div>
        </>
      );
    }
    if (favourites.loading) {
      return <LoadingSpinner />;
    }
    if (favourites.errorMsg !== '') {
      return <p className="text-danger mt-5">{favourites.errorMsg}</p>;
    }

    return <p className="text-danger mt-5">Error Loading Data</p>;
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
        <h2 className="text-center custom-font-a plan-header">
          <i className="fas fa-star text-warning" />
          {' '}
          Favourites
          {' '}
          <i className="fas fa-star text-warning" />
        </h2>
        {showFavourites()}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedInStatus: state.loggedIn.data,
  favourites: state.favourites.data,
});

const mapDispatchToProps = dispatch => ({
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
  getFavourites: () => dispatch(getFavourites()),
  logout: () => dispatch(logout()),
});

Favourites.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  loggedInStatus: PropTypes.instanceOf(Object).isRequired,
  favourites: PropTypes.instanceOf(Object).isRequired,
  getFavourites: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkLoggedInStatus, getPlans, logout } from '../redux'
import '../styles/Hamnav.css'
import _ from 'lodash'
import PlanCard from '../components/PlanCard'
import LoadingSpinner from '../components/LoadingSpinner'

const Houseplans = ({ history, loggedInStatus, isLoggedIn, plans, getPlans, logout}) => {

  useEffect(() => {
    getPlans()
    isLoggedIn()
  }, [getPlans, isLoggedIn])

  const showONavLinks = () => {
    if (loggedInStatus.logged_in) {
      return (
        <>
          <li className="nav-item"><Link to={"/houseplans"}>House Plans</Link></li>
          <li className="nav-item"><Link to={"/favourites"}>Favourites</Link></li>
          <li className="nav-item"><button className="btn btn-start rounded-pill xs-font" onClick={handleLogout}>Logout&nbsp;&nbsp;<i className="fas fa-sign-out-alt"></i></button></li>
        </>
      )
    }
  }
  
  const handleLogout = () => {
    logout()
    setTimeout(() => {
      history.push("/signin")
    }, 3000);
  }

  const showPlans = () => {
    if (!_.isEmpty(plans.data.result) && plans.data.status === 200) {
      const res = plans.data.result
      return (
        <>
          <div className="plans-container">
            {
              res.map((item, idx) => <PlanCard key={idx} id={item.id} img_url={item.design_img_url} name={item.name} price={item.price} />)
            }
          </div>
        </>
      )
    }
    else if (plans.data.status === 401) {
      return (
        <>
          <div className="text-center">
            <h1 className="custom-font-b text-danger">401: Authorization Required</h1>
            <h5 className="custom-font-b"><Link to={"/"}><u>Go Home</u></Link></h5>
          </div>
        </>
      )
    }
    if (plans.loading) {
      return <LoadingSpinner />;
    }
    if (plans.errorMsg !== '') {
      return <p className="text-danger mt-5">{plans.errorMsg}</p>;
    }
  }


  return (
    <div>
      <ul className="navigation">
        <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
        <li className="nav-item"><Link to={"/"}>Home</Link></li>
        {showONavLinks()}
      </ul>

      <input type="checkbox" id="nav-trigger" className="nav-trigger " />
      <label htmlFor="nav-trigger"><span className="hidden_nav"></span></label>

      <div className="content-wrap">
        <h2 className="text-center custom-font-a plan-header">House Plans</h2>
        {showPlans()}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loggedInStatus: state.loggedIn.data,
    plans: state.plans
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedIn: () => dispatch(checkLoggedInStatus()),
    getPlans: () => dispatch(getPlans()),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Houseplans)

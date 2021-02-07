import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPlans } from '../redux'
import '../styles/Hamnav.css'
import _ from 'lodash'
import PlanCard from '../components/PlanCard'
import LoadingSpinner from '../components/LoadingSpinner'

const Houseplans = ({ plans, getPlans }) => {

  useEffect(() => {
    getPlans()
  }, [getPlans])

  const showPlans = () => {
    if (!_.isEmpty(plans.data.result) && plans.data.status === 200) {
      const res = plans.data.result  
      return (
        <>
          <div className="plans-container">
            {
              res.map((item,idx) => <PlanCard key={idx} img_url={item.design_img_url} name={item.name} price={item.price}/>)
            }
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
    <div className="bg-plans">
      <ul className="navigation">
        <img className="footer-logo mt-3" src="https://i.ibb.co/vHyFVVz/logo-ac-b.png" alt="footer-logo" />
        <li className="nav-item"><Link to={"/"}>Home</Link></li>
        <li className="nav-item"><Link to={"/houseplans"}>House Plans</Link></li>
        <li className="nav-item"><Link to={"/houseplans"}>Favourites</Link></li>
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
    plans: state.plans
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlans: () => dispatch(getPlans())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Houseplans)

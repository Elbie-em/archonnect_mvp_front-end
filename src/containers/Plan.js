import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner';
import SPlanCard from '../components/SPlanCard';
import {getPlan} from '../redux'

const Plan = ({ match, plan, getPlan}) => {
  const planId = match.params.id;
  useEffect(() => {
    getPlan(planId)
  }, [getPlan]);

  
  const showPlan = () => {
    if (!_.isEmpty(plan.data.result) && plan.data.status === 202) {
      const item = plan.data.result
      return (
        <>
           <SPlanCard name={item.name} details={item.details} architect={item.architect_name} rating={item.rating} price={item.price} imgF={item.design_img_url} imgS={item.blueprint_one_url} imgT={item.blueprint_two_url} />
        </>
      )
    }
    else if (plan.data.status === 401) {
      return (
        <>
          <div className="text-center">
            <div className="empty-div"></div>
            <h1 className="custom-font-b text-danger">401: Authorization Required</h1>
            <h5 className="custom-font-b"><Link to={"/"}><u>Go Home</u></Link></h5>
          </div>
        </>
      )
    }
    if (plan.loading) {
      return <LoadingSpinner />;
    }
    if (plan.errorMsg !== '') {
      return <p className="text-danger mt-5">{plan.errorMsg}</p>;
    }
  }


  return (
    <div className="sp-bg">
      {showPlan()}
    </div>
  )
}

const mapStateToProps = state => ({
  plan: state.plan,
});

const mapDispatchToProps = dispatch => ({
  getPlan: id => dispatch(getPlan(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Plan)

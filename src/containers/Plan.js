import React, { useEffect } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import SPlanCard from '../components/SPlanCard';
import { createFavourite, getPlan, checkLoggedInStatus } from '../redux';

const Plan = ({
  match, plan, getPlan, createFavourite, loggedInStatus, isLoggedIn,
}) => {
  const planId = match.params.id;
  let userId = '';
  useEffect(() => {
    isLoggedIn();
    getPlan(planId);
  }, [getPlan, isLoggedIn]);

  if (loggedInStatus.logged_in) {
    userId = loggedInStatus.user.id;
  }

  const handleCreateFavourite = () => {
    const favData = { data: { user_id: userId, plan_id: planId } };
    createFavourite(favData)
      .then(response => {
        const res = response.payload;
        let message = '';
        if (res.status === 202) {
          message = res.message;
          toast.success(message);
        } else if (res.status === 500) {
          message = res.message;
          toast.warn(message);
        }
      }).catch(err => {
        toast.error(err);
      });
  };

  const showPlan = () => {
    if (!_.isEmpty(plan.data.result) && plan.data.status === 202) {
      const item = plan.data.result;
      return (
        <>
          <SPlanCard
            name={item.name}
            details={item.details}
            architect={item.architect_name}
            rating={item.rating}
            price={item.price}
            imgF={item.design_img_url}
            imgS={item.blueprint_one_url}
            imgT={item.blueprint_two_url}
            createFavourite={handleCreateFavourite}
          />
        </>
      );
    }
    if (plan.data.status === 401) {
      return (
        <>
          <div className="text-center">
            <div className="empty-div" />
            <h1 className="custom-font-b text-danger">401: Authorization Required</h1>
            <h5 className="custom-font-b"><Link to="/"><u>Go Home</u></Link></h5>
          </div>
        </>
      );
    }
    if (plan.loading) {
      return <LoadingSpinner />;
    }
    if (plan.errorMsg !== '') {
      return <p className="text-danger mt-5">{plan.errorMsg}</p>;
    }

    return <p className="text-danger mt-5">Error Loading Plan</p>;
  };

  return (
    <div className="sp-bg">
      <ToastContainer />
      {showPlan()}
    </div>
  );
};

const mapStateToProps = state => ({
  plan: state.plan,
  loggedInStatus: state.loggedIn.data,
});

const mapDispatchToProps = dispatch => ({
  getPlan: id => dispatch(getPlan(id)),
  createFavourite: data => dispatch(createFavourite(data)),
  isLoggedIn: () => dispatch(checkLoggedInStatus()),
});

Plan.propTypes = {
  match: PropTypes.string.isRequired,
  loggedInStatus: PropTypes.instanceOf(Object).isRequired,
  plan: PropTypes.instanceOf(Object).isRequired,
  getPlan: PropTypes.func.isRequired,
  createFavourite: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Plan);

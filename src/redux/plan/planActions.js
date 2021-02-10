import axios from 'axios';
import { GET_PLAN_FAILURE, GET_PLAN_SUCCESS, GET_PLAN_REQUEST } from './planTypes';

export const getPlanRequest = () => ({
  type: GET_PLAN_REQUEST,
});

export const getPlanSuccess = data => ({
  type: GET_PLAN_SUCCESS,
  payload: data,
});

export const getPlanFailure = error => ({
  type: GET_PLAN_FAILURE,
  payload: error,
});

export const getPlan = id => dispatch => {
  dispatch(getPlanRequest());
  axios.get(`https://api-archonnect-mvp.herokuapp.com/api/v1/plans/${id}`, { withCredentials: true })
    .then(response => {
      dispatch(getPlanSuccess(response.data));
    }).catch(error => {
      dispatch(getPlanFailure(error));
    });
};

import axios from 'axios';
import { GET_PLAN_FAILURE, GET_PLAN_SUCCESS, GET_PLAN_REQUEST } from './planTypes';
import BASEURL from '../../staticData/API/api';

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
  axios.get(`${BASEURL}/${id}`, { withCredentials: true })
    .then(response => {
      dispatch(getPlanSuccess(response.data));
    }).catch(error => {
      dispatch(getPlanFailure(error));
    });
};

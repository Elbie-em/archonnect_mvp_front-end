import axios from 'axios';
import { GET_PLANS_FAILURE, GET_PLANS_SUCCESS, GET_PLANS_REQUEST } from './houseplanTypes';
import BASEURL from '../../staticData/API/api';

export const getPlansRequest = () => ({
  type: GET_PLANS_REQUEST,
});

export const getPlansSuccess = data => ({
  type: GET_PLANS_SUCCESS,
  payload: data,
});

export const getPlansFailure = error => ({
  type: GET_PLANS_FAILURE,
  payload: error,
});

export const getPlans = () => dispatch => {
  dispatch(getPlansRequest());
  axios.get(`${BASEURL}/plans`, { withCredentials: true })
    .then(response => {
      dispatch(getPlansSuccess(response.data));
    }).catch(error => {
      dispatch(getPlansFailure(error));
    });
};

import axios from 'axios';
import BASEURL from '../../staticData/API/api';
import { CHECK_USER_FAILURE, CHECK_USER_REQUEST, CHECK_USER_SUCCESS } from './userTypes';

export const checkUserRequest = () => ({
  type: CHECK_USER_REQUEST,
});

export const checkUserSuccess = response => ({
  type: CHECK_USER_SUCCESS,
  payload: response,
});
export const checkUserFailure = error => ({
  type: CHECK_USER_FAILURE,
  payload: error,
});

export const checkUser = email => dispatch => {
  dispatch(checkUserRequest());
  return axios.get(`${BASEURL}/registrations/${email}`, {
    headers: {
      'Access-Control-Allow-Origin': 'https://archonnect-mvp.herokuapp.com/',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    withCredentials: true,
  })
    .then(response => dispatch(checkUserSuccess(response.data)))
    .catch(error => dispatch(checkUserFailure(error)));
};

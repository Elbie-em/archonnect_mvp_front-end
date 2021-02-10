import axios from 'axios';
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
  return axios.get(`https://api-archonnect-mvp.herokuapp.com/api/v1/${email}`)
    .then(response => dispatch(checkUserSuccess(response.data)))
    .catch(error => dispatch(checkUserFailure(error)));
};

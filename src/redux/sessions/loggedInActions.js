import axios from 'axios';
import { CHECK_LOGGED_IN_FAILURE, CHECK_LOGGED_IN_REQUEST, CHECK_LOGGED_IN_SUCCESS } from './loggedInTypes';
import BASEURL from '../../staticData/API/api';

export const checkLoggedInRequest = () => ({
  type: CHECK_LOGGED_IN_REQUEST,
});

export const checkLoggedInSuccess = response => ({
  type: CHECK_LOGGED_IN_SUCCESS,
  payload: response,
});
export const checkLoggedInFailure = error => ({
  type: CHECK_LOGGED_IN_FAILURE,
  payload: error,
});

export const checkLoggedInStatus = () => dispatch => {
  dispatch(checkLoggedInRequest());
  axios.get(`${BASEURL}/logged_in`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    withCredentials: true,
  })
    .then(response => {
      dispatch(checkLoggedInSuccess(response.data));
    }).catch(error => {
      dispatch(checkLoggedInFailure(error));
    });
};

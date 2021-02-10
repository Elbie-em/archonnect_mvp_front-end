import axios from 'axios';
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS } from './logInTypes';

export const logInRequest = () => ({
  type: LOG_IN_REQUEST,
});

export const logInSuccess = response => ({
  type: LOG_IN_SUCCESS,
  payload: response,
});
export const logInFailure = error => ({
  type: LOG_IN_FAILURE,
  payload: error,
});

export const logIn = data => dispatch => {
  dispatch(logInRequest());
  return axios.post('https://api-archonnect-mvp.herokuapp.com/api/v1/sessions', data, { withCredentials: true })
    .then(response => dispatch(logInSuccess(response.data)))
    .catch(error => dispatch(logInFailure(error)));
};

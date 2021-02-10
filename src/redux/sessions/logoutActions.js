import axios from 'axios';
import { LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS } from './logoutTypes';

export const logoutRequest = () => ({
  type: LOG_OUT_REQUEST,
});

export const logoutSuccess = response => ({
  type: LOG_OUT_SUCCESS,
  payload: response,
});
export const logoutFailure = error => ({
  type: LOG_OUT_FAILURE,
  payload: error,
});

export const logout = () => dispatch => {
  dispatch(logoutRequest());
  axios.delete('https://api-archonnect-mvp.herokuapp.com/api/v1/logout', { withCredentials: true })
    .then(response => {
      dispatch(logoutSuccess(response.data));
    }).catch(error => {
      dispatch(logoutFailure(error));
    });
};

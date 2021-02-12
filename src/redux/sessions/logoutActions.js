import axios from 'axios';
import BASEURL from '../../staticData/API/api';
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
  axios.delete(`${BASEURL}/logout`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    withCredentials: true,
  })
    .then(response => {
      dispatch(logoutSuccess(response.data));
    }).catch(error => {
      dispatch(logoutFailure(error));
    });
};

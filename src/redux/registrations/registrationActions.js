import axios from 'axios';
import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from './registrationTypes';
import BASEURL from '../../staticData/API/api';

export const createUserRequest = () => ({
  type: CREATE_USER_REQUEST,
});

export const createUserSuccess = response => ({
  type: CREATE_USER_SUCCESS,
  payload: response,
});
export const createUserFailure = error => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

export const createUser = data => dispatch => {
  dispatch(createUserRequest());
  axios.post(`${BASEURL}/registrations`,
    data,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      withCredentials: true,
    })
    .then(response => {
      dispatch(createUserSuccess(response.data));
    }).catch(error => {
      dispatch(createUserFailure(error));
    });
};

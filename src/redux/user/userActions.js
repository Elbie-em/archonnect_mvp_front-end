import { CHECK_USER_FAILURE, CHECK_USER_REQUEST, CHECK_USER_SUCCESS } from "./userTypes"

import axios from 'axios'

export const checkUserRequest = () => {
  return {
    type:CHECK_USER_REQUEST
  }
}

export const checkUserSuccess = (response) => {
  return {
    type:CHECK_USER_SUCCESS,
    payload: response
  }
}
export const checkUserFailure = (error) => {
  return {
    type:CHECK_USER_FAILURE,
    payload: error
  }
}

export const checkUser = (email) => {
  return (dispatch) => {
    dispatch(checkUserRequest())
   return axios.get(`http://localhost:3001/api/v1/registrations/${email}`)
    .then(response => {
      return dispatch(checkUserSuccess(response.data))
    }).catch(error => {
      return dispatch(checkUserFailure(error))
    })
  }
}
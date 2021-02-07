import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS } from "./logInTypes"

import axios from 'axios'

export const logInRequest = () => {
  return {
    type: LOG_IN_REQUEST
  }
}

export const logInSuccess = (response) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: response
  }
}
export const logInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    payload: error
  }
}

export const logIn = (data) => {
  return (dispatch) => {
    dispatch(logInRequest())
    axios.post(`http://localhost:3001/api/v1/logged_in`, data, { withCredentials: true })
      .then(response => {
        dispatch(logInSuccess(response.data))
      }).catch(error => {
        dispatch(logInFailure(error))
      })
  }
}
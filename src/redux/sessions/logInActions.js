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
    return axios.post("https://api-archonnect-mvp.herokuapp.com/api/v1/sessions", data, { withCredentials: true })
      .then(response => {
        console.log(response.data)
        return dispatch(logInSuccess(response.data))
      }).catch(error => {
        return dispatch(logInFailure(error))
      })
  }
}
import { LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS } from "./logoutTypes"

import axios from 'axios'

export const logoutRequest = () => {
  return {
    type: LOG_OUT_REQUEST
  }
}

export const logoutSuccess = (response) => {
  return {
    type: LOG_OUT_SUCCESS,
    payload: response
  }
}
export const logoutFailure = (error) => {
  return {
    type: LOG_OUT_FAILURE,
    payload: error
  }
}

export const logout = (data) => {
  return (dispatch) => {
    dispatch(logoutRequest())
    axios.delete(`http://localhost:3001/api/v1/logout`, { withCredentials: true })
      .then(response => {
        dispatch(logoutSuccess(response.data))
      }).catch(error => {
        dispatch(logoutFailure(error))
      })
  }
}
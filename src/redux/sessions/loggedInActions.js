import { CHECK_LOGGED_IN_FAILURE, CHECK_LOGGED_IN_REQUEST, CHECK_LOGGED_IN_SUCCESS } from "./loggedInTypes"
import axios from 'axios'

export const checkLoggedInRequest = () => {
  return {
    type: CHECK_LOGGED_IN_REQUEST
  }
}

export const checkLoggedInSuccess = (response) => {
  return {
    type: CHECK_LOGGED_IN_SUCCESS,
    payload: response
  }
}
export const checkLoggedInFailure = (error) => {
  return {
    type: CHECK_LOGGED_IN_FAILURE,
    payload: error
  }
}

export const checkLoggedInStatus = () => {
  return (dispatch) => {
    dispatch(checkLoggedInRequest())
    axios.get("https://api-archonnect-mvp.herokuapp.com/api/v1/logged_in", { withCredentials: true })
      .then(response => {
        dispatch(checkLoggedInSuccess(response.data))
      }).catch(error => {
        dispatch(checkLoggedInFailure(error))
      })
  }
}
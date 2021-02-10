import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from "./registrationTypes"
import axios from 'axios'

export const createUserRequest = () => {
  return {
    type:CREATE_USER_REQUEST
  }
}

export const createUserSuccess = (response) => {
  return {
    type:CREATE_USER_SUCCESS,
    payload: response
  }
}
export const createUserFailure = (error) => {
  return {
    type:CREATE_USER_FAILURE,
    payload: error
  }
}

export const createUser = (data) => {
  return (dispatch) => {
    dispatch(createUserRequest())
    axios.post("https://api-archonnect-mvp.herokuapp.com/api/v1/registrations",
    data,
    {
      withCredentials: true
    })
    .then(response => {
       dispatch(createUserSuccess(response.data))
    }).catch(error => {
      dispatch(createUserFailure(error))
    })
  }
}
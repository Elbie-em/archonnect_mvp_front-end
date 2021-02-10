import axios from "axios"
import { GET_PLANS_FAILURE,GET_PLANS_SUCCESS, GET_PLANS_REQUEST } from "./houseplanTypes"

export const getPlansRequest = () => {
  return {
    type: GET_PLANS_REQUEST,
  }
}

export const getPlansSuccess = (data) => {
  return {
    type: GET_PLANS_SUCCESS,
    payload: data,
  }
}

export const getPlansFailure = (error) => {
  return {
    type: GET_PLANS_FAILURE,
    payload: error,
  }
}

export const getPlans = () => {
  return (dispatch) => {
    dispatch(getPlansRequest())
    axios.get("https://api-archonnect-mvp.herokuapp.com/api/v1/plans",{withCredentials:true})
    .then(response => {
      dispatch(getPlansSuccess(response.data))
    }).catch(error => {
      dispatch(getPlansFailure(error))
    })
  }
} 
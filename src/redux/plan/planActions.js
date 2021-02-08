import axios from "axios"
import { GET_PLAN_FAILURE, GET_PLAN_SUCCESS, GET_PLAN_REQUEST } from "./planTypes"

export const getPlanRequest = () => {
  return {
    type: GET_PLAN_REQUEST,
  }
}

export const getPlanSuccess = (data) => {
  return {
    type: GET_PLAN_SUCCESS,
    payload: data,
  }
}

export const getPlanFailure = (error) => {
  return {
    type: GET_PLAN_FAILURE,
    payload: error,
  }
}

export const getPlan = (id) => {
  return (dispatch) => {
    dispatch(getPlanRequest())
    axios.get(`http://localhost:3001/api/v1/plans/${id}`, { withCredentials: true })
      .then(response => {
        dispatch(getPlanSuccess(response.data))
      }).catch(error => {
        dispatch(getPlanFailure(error))
      })
  }
} 
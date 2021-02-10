import axios from "axios"
import { GET_FAVOURITES_FAILURE, GET_FAVOURITES_SUCCESS, GET_FAVOURITES_REQUEST, CREATE_FAVOURITE_FAILURE, CREATE_FAVOURITE_REQUEST, CREATE_FAVOURITE_SUCCESS } from "./favouritesTypes"


export const getFavouriteRequest = () => {
  return {
    type: GET_FAVOURITES_REQUEST,
  }
}

export const getFavouriteSuccess = (data) => {
  return {
    type: GET_FAVOURITES_SUCCESS,
    payload: data,
  }
}

export const getFavouriteFailure = (error) => {
  return {
    type: GET_FAVOURITES_FAILURE,
    payload: error,
  }
}

export const createFavouriteRequest = () => {
  return {
    type: CREATE_FAVOURITE_REQUEST,
  }
}

export const createFavouriteSuccess = (data) => {
  return {
    type: CREATE_FAVOURITE_SUCCESS,
    payload: data,
  }
}

export const createFavouriteFailure = (error) => {
  return {
    type: CREATE_FAVOURITE_FAILURE,
    payload: error,
  }
}

export const createFavourite = (data) => {
  return (dispatch) => {
    dispatch(createFavouriteRequest())
    return axios.post("http://localhost:3001/api/v1/favourites",
    data,
    {
      withCredentials: true
    })
    .then(response => {
      return dispatch(createFavouriteSuccess(response.data))
    }).catch(error => {
      return dispatch(createFavouriteFailure(error))
    })
  }
}

export const getFavourites = () => {
  return (dispatch) => {
    dispatch(getFavouriteRequest())
    axios.get(`http://localhost:3001/api/v1/favourites`, { withCredentials: true })
      .then(response => {
        dispatch(getFavouriteSuccess(response.data))
      }).catch(error => {
        dispatch(getFavouriteFailure(error))
      })
  }
} 
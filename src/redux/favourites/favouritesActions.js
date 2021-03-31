import axios from 'axios';
import {
  GET_FAVOURITES_FAILURE, GET_FAVOURITES_SUCCESS,
  GET_FAVOURITES_REQUEST, CREATE_FAVOURITE_FAILURE,
  CREATE_FAVOURITE_REQUEST, CREATE_FAVOURITE_SUCCESS,
} from './favouritesTypes';
import BASEURL from '../../staticData/API/api';

export const getFavouriteRequest = () => ({
  type: GET_FAVOURITES_REQUEST,
});

export const getFavouriteSuccess = data => ({
  type: GET_FAVOURITES_SUCCESS,
  payload: data,
});

export const getFavouriteFailure = error => ({
  type: GET_FAVOURITES_FAILURE,
  payload: error,
});

export const createFavouriteRequest = () => ({
  type: CREATE_FAVOURITE_REQUEST,
});

export const createFavouriteSuccess = data => ({
  type: CREATE_FAVOURITE_SUCCESS,
  payload: data,
});

export const createFavouriteFailure = error => ({
  type: CREATE_FAVOURITE_FAILURE,
  payload: error,
});

export const createFavourite = data => dispatch => {
  dispatch(createFavouriteRequest());
  return axios.post(`${BASEURL}/favourites`, data, { withCredentials: true })
    .then(response => dispatch(createFavouriteSuccess(response.data)))
    .catch(error => dispatch(createFavouriteFailure(error)));
};

export const getFavourites = () => dispatch => {
  dispatch(getFavouriteRequest());
  return axios.get(`${BASEURL}/favourites`, { withCredentials: true })
    .then(response => dispatch(getFavouriteSuccess(response.data)))
    .catch(error => dispatch(getFavouriteFailure(error.message)));
};

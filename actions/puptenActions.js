import { GET_DOCTORS, GET_PATIENTS, SET_CURRENT, SET_LOADING } from './types';
import { API_URL } from '@config/index';

export const getPatients = () => async dispatch => {
  setLoading();
  const res = await fetch(`${API_URL}/api`);
  const data = await res.json();

  dispatch({
    type: GET_PATIENTS,
    payload: data.pets,
  });
};

export const getDoctors = () => async dispatch => {
  setLoading();
  const res = await fetch(`${API_URL}/api`);
  const data = await res.json();

  dispatch({
    type: GET_DOCTORS,
    payload: data.doctors,
  });
};

export const setCurrent = data => async dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: data,
  });
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

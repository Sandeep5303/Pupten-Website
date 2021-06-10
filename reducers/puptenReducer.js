import {
  GET_DOCTORS,
  GET_PATIENTS,
  SET_CURRENT,
  SET_LOADING,
} from '@actions/types';

const initialState = {
  patients: null,
  doctors: null,
  current: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENTS: {
      return {
        ...state,
        patients: action.payload,
        loading: false,
      };
    }
    case GET_DOCTORS: {
      return {
        ...state,
        doctors: action.payload,
        loading: false,
      };
    }
    case SET_CURRENT: {
      return {
        ...state,
        current: [...state.current, action.payload],
      };
    }
    case SET_LOADING: {
      console.log('loading');
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;

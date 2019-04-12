
import {
  GET_DATA,
  GOT_DATA,
  CREATE_NEW_SMURF,
  DELETE_SMURF,
  UPDATE_SMURF,
  SMURF_FAILURE, 
} from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const rootReducer = (state=initialState, action) => {
  //switch
switch(action.type) {
  case GET_DATA: 
    return {
      ...state,
      fetchingSmurfs: true,
      error: 'Error getting Data'
    }
  case GOT_DATA: 
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false, 
      error: 'Error returning data'
    }
  case CREATE_NEW_SMURF:
    return {
      smurfs: action.payload,
    }
  case UPDATE_SMURF:
    return {
      smurfs: action.payload,
      updatingSmurf: true,
    }
  case DELETE_SMURF:
    return {
      smurfs: action.payload,
      deleteSmurf: true,
    }
  case SMURF_FAILURE:
  default: return state;
  }
}


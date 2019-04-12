/*
  Be sure to import in all of the action types from `../actions`
*/
//actions
import {
  GET_DATA,
  GOT_DATA,
  CREATE_NEW_SMURF,
  DELETE_SMURF,
  UPDATE_SMURF
} from '../actions';

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


export const rootReducer = (state=initialState, action) => {
  //switch
  switch(action.type) {
    case GET_DATA: {
      return {
        ...state,
        fetchingSmurfs: true,
        error: 'Error getting Data'
      }
    }
    case GOT_DATA: {
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false, 
        error: 'Error returning data'
      }
    }
    case CREATE_NEW_SMURF:{
      return {
        ...state, 
        smurfs: action.payload,
        addingSmurf: true
      }
    }
  }
}


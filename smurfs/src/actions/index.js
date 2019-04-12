import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_DATA = 'FETCHING_DATA';
export const GOT_DATA = 'GOT_DATA'
export const CREATE_NEW_SMURF = 'CREATE_NEW_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurf = () => dispatch =>{
  dispatch({ type: GET_DATA })
  axios.get('http://localhost:3333/smurfs')
    .then((res) => {
      dispatch({ type: GOT_DATA, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    })
}

export const createSmurf = () => dispatch => {
  axios.post('http://localhost:3333/')
    .then((res) => {
      dispatchEvent({ type: CREATE_NEW_SMURF, payload: res.data });
    })
   .catch((err) => {
      console.log(err);
    })
}

export const updateSmurf = () => dispatch => {
  axios.put('http://localhost:3333/')
  .then((res) => {
    dispatchEvent({ type: UPDATE_SMURF, payload: res.data });
  })
  .catch((err) => {
    console.log(err);
  })
}

export const deleteSmurf = () => dispatch => {
  axios.delete('http://localhost:3333/')
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_SMURF, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    })
}
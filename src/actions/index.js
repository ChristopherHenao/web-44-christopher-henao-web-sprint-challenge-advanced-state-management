import axios from 'axios';
// import { server } from './../mocks/server'

export const SMURF_FETCH_START = "SMURF_FETCH_START"
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS"
export const SMURF_FETCH_FAILURE = "SMURF_FETCH_FAILURE"
export const ADD_SMURF = "ADD_SMURF"
export const ADD_ERROR_MESSAGE = "ADD_ERROR_MESSAGE"

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.


// Thunk Action
export const fetchSmurfs = () => (dispatch) => {
    dispatch(getSmurfsStart)
    axios.get('http://localhost:3333/smurfs')

    .then(res => {
        dispatch(getSmurfsSuccess(res.data))
    })

    .catch(err => {
        dispatch(getSmurfsFailure(err))
    })
}



// Action Creators
const getSmurfsStart = () => {
    return ({type: SMURF_FETCH_START})
}

const getSmurfsSuccess = (smurfsData) => {
    return ({type: SMURF_FETCH_SUCCESS, payload: smurfsData})
}

const getSmurfsFailure = (err) => {
    return ({type: SMURF_FETCH_FAILURE, payload: err})
}

export const addSmurf = (data) => {
    return ({type: ADD_SMURF, payload: data})
}

export const addErrorMessage = (data) => {
    return ({type: ADD_ERROR_MESSAGE, payload: data})
}

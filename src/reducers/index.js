import { combineReducers } from "redux";
import { FETCH_FAILED, FETCH_STARTED, FETCH_SUCCESS, NEW_FETCH } from "../actions/type";

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
    query: '',
    showClearFetch: false
}

const fetchResults = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return { ...state, data: action.payload, error: false, loading: false, showClearFetch: true }
        case FETCH_FAILED:
            return { ...state, error: true }
        case FETCH_STARTED:
            return { ...state, loading: true, error: false, query: action.payload }
        case NEW_FETCH:
            return { ...state, data: [], showClearFetch: false }
    }
    return state
}

export default rootReducer = combineReducers({ fetchResults })
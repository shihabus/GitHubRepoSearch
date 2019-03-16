import { FETCH_FAILED, FETCH_STARTED, FETCH_SUCCESS, NEW_FETCH } from "./type";

export const fetchUsers = (query) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_STARTED,
      payload: query
    })
    fetch(`https://api.github.com/users/${query}/repos`, {
      method: 'GET'
    })
      .then(res =>res.json())
      .then(result => {
        if (result.length == 0 || result.message=="Not Found") {
          return dispatch({
            type: FETCH_FAILED
          })
        }
        dispatch({
          type: FETCH_SUCCESS,
          payload: result
        })
      })
      .catch(() => {
        dispatch({
          type: FETCH_FAILED
        })
      })
  }
}

export const clearFetch = () => {
  return ({
    type: NEW_FETCH
  })
}
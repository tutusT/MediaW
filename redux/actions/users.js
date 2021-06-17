import Service from '../../service'

import {
  FETCH_USERS_SUCCESS,
  FETCH_SELECTED_USER_ID_SUCCESS,
  FETCH_SELECTED_USER,
  FETCH_FAILURE,
} from '../types'

const { getAllUsers, getUser } = new Service()

const fetchUsersSuccess = payload => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload,
  }
}

const fetchSelectedUserIdSuccess = payload => {
  return {
    type: FETCH_SELECTED_USER_ID_SUCCESS,
    payload,
  }
}

const fetchUserSuccess = payload => {
  return {
    type: FETCH_SELECTED_USER,
    payload,
  }
}

const fetchUser = id => async dispatch => {
  dispatch(fetchSelectedUserIdSuccess(id))

  try {
    const user = await getUser(id)
    dispatch(fetchUserSuccess(user))
  } catch (error) {
    dispatch({ type: FETCH_FAILURE })
  }
}

const fetchUsers = () => async dispatch => {
  try {
    const users = await getAllUsers()
    dispatch(fetchUsersSuccess(users))
  } catch (error) {
    dispatch({ type: FETCH_FAILURE })
  }
}

export { fetchUser, fetchUsers }

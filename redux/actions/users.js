import Service from '../../service'

import {
  FETCH_USERS_SUCCESS,
  FETCH_SELECTED_USER_ID_SUCCESS,
  FETCH_SELECTED_USER,
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

  const user = await getUser(id)

  dispatch(fetchUserSuccess(user))
}

const fetchUsers = () => async dispatch => {
  const users = await getAllUsers()
  dispatch(fetchUsersSuccess(users))
}

export { fetchUser, fetchUsers }

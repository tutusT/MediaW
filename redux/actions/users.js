import Service from '../../service'

import { FETCH_USER, FETCH_USERS, FETCH_USER_ID } from '../types'

const { getAllUsers, getUser } = new Service()

const usersFetchSuccess = payload => {
  return {
    type: FETCH_USERS,
    payload,
  }
}

const userIdFetch = payload => {
  return {
    type: FETCH_USER_ID,
    payload,
  }
}

const userFetchSuccess = payload => {
  return {
    type: FETCH_USER,
    payload,
  }
}

const userFetch = id => async dispatch => {
  dispatch(userIdFetch(id))

  const user = await getUser(id)

  dispatch(userFetchSuccess(user))
}

const usersFetch = () => async dispatch => {
  const users = await getAllUsers()
  dispatch(usersFetchSuccess(users))
}

export { usersFetch, userFetch }

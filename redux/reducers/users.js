import { FETCH_USER, FETCH_USERS, FETCH_USER_ID } from '../types'

const initialState = {
  users: [],
  selectedUserId: null,
  selectedUser: [],
}

export const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case FETCH_USER_ID:
      return {
        ...state,
        selectedUserId: action.payload,
      }
    case FETCH_USER:
      return {
        ...state,
        selectedUser: action.payload,
      }
    default:
      return state
  }
}

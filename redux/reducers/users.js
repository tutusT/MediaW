import {
  FETCH_USERS_SUCCESS,
  FETCH_SELECTED_USER_ID_SUCCESS,
  FETCH_SELECTED_USER,
} from '../types'

const initialState = {
  users: [],
  selectedUserId: null,
  selectedUser: [],
}

export const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      }
    case FETCH_SELECTED_USER_ID_SUCCESS:
      return {
        ...state,
        selectedUserId: action.payload,
      }
    case FETCH_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      }
    default:
      return state
  }
}

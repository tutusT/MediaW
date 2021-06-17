import { FETCH_POSTS_SUCCESS, FETCH_POSTS_BY_USER_SUCCESS } from '../types'

const initialState = {
  posts: [],
  postsByUser: [],
}

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      }
    case FETCH_POSTS_BY_USER_SUCCESS:
      return {
        ...state,
        postsByUser: action.payload,
      }
    default:
      return state
  }
}

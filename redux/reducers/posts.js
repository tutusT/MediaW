import { FETCH_POSTS, FETCH_POSTS_USER } from '../types'

const initialState = {
  posts: [],
  postsUser: [],
}

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case FETCH_POSTS_USER:
      return {
        ...state,
        postsUser: action.payload,
      }
    default:
      return state
  }
}

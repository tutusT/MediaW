import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { posts } from './posts'
import { users } from './users'
import { comments } from './comments'

const rootReducer = combineReducers({
  users,
  posts,
  comments,
})

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

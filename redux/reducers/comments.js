import { FETCH_COMMENTS } from '../types'

const initialState = {
  comments: [],
}

export const comments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...action.payload],
      }

    default:
      return state
  }
}

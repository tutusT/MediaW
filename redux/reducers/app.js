import {
  APP_LOADING_START,
  APP_LOADING_END,
  FETCH_FAILURE,
  HIDE_ERROR,
} from '../types'

const initialState = {
  loading: false,
  error: false,
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING_START:
      return {
        ...state,
        loading: true,
      }

    case APP_LOADING_END:
      return {
        ...state,
        loading: false,
      }

    case FETCH_FAILURE:
      return {
        ...state,
        error: true,
      }

    case HIDE_ERROR:
      return {
        ...state,
        error: false,
      }

    default:
      return state
  }
}

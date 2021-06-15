import { APP_LOADING_START, APP_LOADING_END } from '../types'

const initialState = {
  loading: false,
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

    default:
      return state
  }
}

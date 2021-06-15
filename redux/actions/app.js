import { APP_LOADING_START, APP_LOADING_END } from '../types'

const appLoadingStart = payload => {
  return {
    type: APP_LOADING_START,
    payload,
  }
}

const appLoadingEnd = payload => {
  return {
    type: APP_LOADING_END,
    payload,
  }
}

export { appLoadingStart, appLoadingEnd }

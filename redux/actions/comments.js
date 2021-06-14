import Service from '../../service'

import { FETCH_COMMENTS } from '../types'

const { getComments } = new Service()

const commentsFetchSuccess = payload => {
  return {
    type: FETCH_COMMENTS,
    payload,
  }
}

const commentsFetch = id => async dispatch => {
  const comments = await getComments(id)
  dispatch(commentsFetchSuccess(comments))
}

export { commentsFetch }

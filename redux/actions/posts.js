import Service from '../../service'

import { FETCH_POSTS, FETCH_POSTS_USER } from '../types'

const { getAllPosts, getPostsUser } = new Service()

const postsFetchSuccess = payload => {
  return {
    type: FETCH_POSTS,
    payload,
  }
}

const postsFetch = () => async dispatch => {
  const posts = await getAllPosts()
  dispatch(postsFetchSuccess(posts))
}

const postsUserFetchSuccess = payload => {
  return {
    type: FETCH_POSTS_USER,
    payload,
  }
}

const postsUserFetch = id => async dispatch => {
  const posts = await getPostsUser(id)
  dispatch(postsUserFetchSuccess(posts))
}

export { postsUserFetch, postsFetch }

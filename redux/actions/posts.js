import Service from '../../service'

import { FETCH_POSTS_SUCCESS, FETCH_POSTS_BY_USER_SUCCESS } from '../types'

const { getAllPosts, getPostsByUser } = new Service()

const fetchPostsSuccess = payload => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload,
  }
}

const fetchPosts = () => async dispatch => {
  const posts = await getAllPosts()
  dispatch(fetchPostsSuccess(posts))
}

const fetchPostsByUserSuccess = payload => {
  return {
    type: FETCH_POSTS_BY_USER_SUCCESS,
    payload,
  }
}

const fetchPostsByUser = id => async dispatch => {
  const posts = await getPostsByUser(id)
  dispatch(fetchPostsByUserSuccess(posts))
}

export { fetchPostsByUser, fetchPosts }

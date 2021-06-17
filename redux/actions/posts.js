import Service from '../../service'

import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_BY_USER_SUCCESS,
  FETCH_FAILURE,
} from '../types'

const { getAllPosts, getPostsByUser } = new Service()

const fetchPostsSuccess = payload => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload,
  }
}

const fetchPosts = () => async dispatch => {
  try {
    const posts = await getAllPosts()

    dispatch(fetchPostsSuccess(posts))
  } catch (error) {
    dispatch({ type: FETCH_FAILURE })
  }
}

const fetchPostsByUserSuccess = payload => {
  return {
    type: FETCH_POSTS_BY_USER_SUCCESS,
    payload,
  }
}

const fetchPostsByUser = id => async dispatch => {
  try {
    const posts = await getPostsByUser(id)
    dispatch(fetchPostsByUserSuccess(posts))
  } catch (error) {
    dispatch({ type: FETCH_FAILURE })
  }
}

export { fetchPostsByUser, fetchPosts }

import axios from 'axios'

import { urlBlog, urlBlogList } from '../urls'
export const setCount = () => {
  return dispatch => {
    axios
      .get(urlBlogList())
      .then(res => {
        dispatch({
          type: 'SET_COUNT',
          payload: res.data.found
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: 'SET_ERROR',
          payload: true
        })
      })
  }
}

export const setBlogList = page => {
  return dispatch => {
    dispatch({
      type: 'SET_LOADED_FALSE',
      payload: false
    })
    axios
      .get(urlBlogList())
      .then(res => {
        dispatch({
          type: 'SET_BLOGSLIST',
          payload: {
            list: res.data.posts.slice(6 * (page - 1), 6 * page),
            loaded: true
          }
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: 'SET_ERROR',
          payload: true
        })
      })
  }
}

export const setActiveBlog = id => {
  return dispatch => {
    dispatch({
      type: 'SET_ACTIVEBLOG_LOADED',
      payload: false
    })
    axios
      .get(urlBlog(id))
      .then(res => {
        dispatch({
          type: 'SET_ACTIVEBLOG',
          payload: { loaded: true, blog: res.data }
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: 'SET_ERROR',
          payload: true
        })
      })
  }
}

export const changePage = page => {
  return dispatch => {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: page
    })
  }
}

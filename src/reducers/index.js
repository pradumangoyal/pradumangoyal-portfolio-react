import { combineReducers } from 'redux'
import Pagination from './pagination'
import Blogs from './blogs'
import Count from './count'
import Problem from './error'
import ActiveBlog from './active_blog'

const rootReducers = combineReducers({
  pagination: Pagination,
  activeBlog: ActiveBlog,
  blogs: Blogs,
  count: Count,
  problem: Problem
})

export default rootReducers

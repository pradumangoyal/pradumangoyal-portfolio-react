const initialBlogs = {
  loaded: false,
  list: []
}
const blogs = (state = initialBlogs, action) => {
  switch (action.type) {
    case 'SET_BLOGSLIST':
      return action.payload
    case 'SET_LOADED_FALSE':
      return { ...state, loaded: false }
    default:
      return state
  }
}

export default blogs

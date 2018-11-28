const initialState = {
  loaded: false,
  blog: {}
}
const activeBlog = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVEBLOG':
      return action.payload
    case 'SET_ACTIVEBLOG_LOADED':
      return { ...state, loaded: action.payload }
    default:
      return state
  }
}

export default activeBlog

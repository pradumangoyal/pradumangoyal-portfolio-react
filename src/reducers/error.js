const initialState = false
const problem = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return action.payload
    default:
      return state
  }
}

export default problem

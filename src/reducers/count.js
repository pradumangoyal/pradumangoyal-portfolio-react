const initialState = {
  loaded: false,
  count: 0
}
const count = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNT':
      return { loaded: true, count: action.payload }
    default:
      return state
  }
}

export default count

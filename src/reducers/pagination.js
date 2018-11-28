const initialPage = 1
const pagination = (state = initialPage, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return action.payload
    default:
      return state
  }
}
export default pagination

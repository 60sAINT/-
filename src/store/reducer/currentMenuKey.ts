// 处理action中的reducer
const reducer = (state='home', action: { type: string; key: string; }) => {
  switch (action.type) {
    case 'CHANGE':
      return action.key
    default:
      return state
  }
}

export default reducer;
const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BILLING_CYCLES_FETCHED':
<<<<<<< HEAD
      return { ...state, list: action.payload.data }
=======
      return {...state, list: action.payload.data}
>>>>>>> d4959e9c3ced7e32118c6c27fe107e852f55214e
    default:
      return state
  }
}
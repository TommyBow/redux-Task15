// redux/reducers.js

// Defined the initial state of the Redux store
const initialState = {
  balance: 0, // Initial balance set to 0
};

// Defined the root reducer function that handles state updates based on actions
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT_AMOUNT':
      // Updates the balance by adding the deposited amount
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'WITHDRAW_AMOUNT':
      // Updates the balance by subtracting the withdrawn amount
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case 'ADD_INTEREST':
      // Updates the balance by adding interest (5% of the current balance)
      return {
        ...state,
        balance: state.balance + (state.balance * 0.05),
      };
    case 'APPLY_CHARGES':
      // Updates the balance by applying charges (15% of the current balance)
      return {
        ...state,
        balance: state.balance - (state.balance * 0.15),
      };
    default:
      // If the action type is not recognized, return the current state
      return state;
  }
};

export default rootReducer;
// redux/actions.js

// Action creator for depositing an amount into an account
export const depositAmount = (amount) => ({
  type: 'DEPOSIT_AMOUNT', // Action type for depositing amount
  payload: amount, // The amount to be deposited
});

// Action creator for withdrawing an amount from an account
export const withdrawAmount = (amount) => ({
  type: 'WITHDRAW_AMOUNT', // Action type for withdrawing amount
  payload: amount, // The amount to be withdrawn
});

// Action creator for adding interest to an account
export const addInterest = () => ({
  type: 'ADD_INTEREST', // Action type for adding interest
});

// Action creator for applying charges to an account
export const applyCharges = () => ({
  type: 'APPLY_CHARGES', // Action type for applying charges
});
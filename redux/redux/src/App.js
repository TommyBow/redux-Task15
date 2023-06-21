import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { depositAmount, withdrawAmount, addInterest, applyCharges } from './redux/actions.js';

const App = () => {
  // State variable to hold the amount entered in the input field
  const [amount, setAmount] = useState('');

  // Access the 'balance' property from the Redux store state
  const balance = useSelector((state) => state.balance);

  // Get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Event handler for the 'Deposit' button click
  const handleDeposit = () => {
    dispatch(depositAmount(Number(amount))); // Dispatch a 'depositAmount' action with the entered amount
    setAmount(''); // Clear the input field
  };

  // Event handler for the 'Withdraw' button click
  const handleWithdraw = () => {
    dispatch(withdrawAmount(Number(amount))); // Dispatch a 'withdrawAmount' action with the entered amount
    setAmount(''); // Clear the input field
  };

  // Event handler for the 'Add Interest' button click
  const handleAddInterest = () => {
    dispatch(addInterest()); // Dispatch an 'addInterest' action
  };

  // Event handler for the 'Charges' button click
  const handleCharges = () => {
    dispatch(applyCharges()); // Dispatch an 'applyCharges' action
  };

  return (
    <div>
      {/* Display the current cash balance from the Redux store */}
      <h1>Cash Balance: {balance}</h1>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} // Update the 'amount' state with the entered value
      />
      {/*Clicking this button triggers the 'handleDeposit' function */}
      <button onClick={handleDeposit}>Deposit</button> 
       {/*Clicking this button triggers the 'handleWithdraw' function */}
      <button onClick={handleWithdraw}>Withdraw</button> 
      {/*Clicking this button triggers the 'handleAddInterest' function*/}
      <button onClick={handleAddInterest}>Add Interest</button> 
      {/*Clicking this button triggers the 'handleCharges' function*/}
      <button onClick={handleCharges}>Charges</button> 
    </div>
  );
};

export default App;


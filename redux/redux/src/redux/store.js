import { createStore } from 'redux';
import reducer from './reducers';

// Created a Redux store with the specified reducer
const store = createStore(reducer);

export default store;

// src/store/index.js
import { createStore } from 'redux';
import transactionReducer from '../reducers/transactionReducer';

const store = createStore(transactionReducer);

export default store;

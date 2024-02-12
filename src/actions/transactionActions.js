// transactionActions.js
import { ADD_TRANSACTION } from './types'; // Importe os tipos, se necessário

export const addTransaction = (transaction) => {
  return {
    type: ADD_TRANSACTION,
    payload: transaction
  };
};

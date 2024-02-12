// src/containers/TransactionList.js
import React from 'react';
import IncomeTransactions from '../components/IncomeTransactions';
import OutcomeTransactions from '../components/OutcomeTransactions';

const TransactionList = () => {
  return (
    <div>
      <h1>Lista de Transações</h1>
      <IncomeTransactions />
      <OutcomeTransactions />
    </div>
  );
};

export default TransactionList;

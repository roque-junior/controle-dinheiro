// src/components/TransactionIncome.js
import React from 'react';
import { useSelector } from 'react-redux';

const TransactionIncome = () => {
  const incomeTransactions = useSelector((state) =>
    state.transactions.filter((transaction) => transaction.type === 'income')
  );

  return (
    <div>
      <h2>Transações de Entrada</h2>
      <ul>
        {incomeTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: R${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionIncome;

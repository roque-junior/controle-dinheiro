// src/components/TransactionOutcome.js
import React from 'react';
import { useSelector } from 'react-redux';

const TransactionOutcome = () => {
  const outcomeTransactions = useSelector((state) =>
    state.transactions.filter((transaction) => transaction.type === 'outcome')
  );

  return (
    <div>
      <h2>Transações de Saída</h2>
      <ul>
        {outcomeTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: R${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionOutcome;

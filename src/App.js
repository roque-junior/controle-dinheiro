// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import TransactionForm from './components/TransactionForm';

const App = () => {
  const transactions = useSelector((state) => state.transactions);

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === 'income'
  );

  const outcomeTransactions = transactions.filter(
    (transaction) => transaction.type === 'outcome'
  );

  const totalIncome = incomeTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const totalOutcome = outcomeTransactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const balance = totalIncome - totalOutcome;

  return (
    <div>
      <h1>Controle de Dinheiro</h1>
      <TransactionForm />
      <h2>Transações de Entrada</h2>
      <ul>
        {incomeTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: R${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <h2>Transações de Saída</h2>
      <ul>
        {outcomeTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: R${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <h2>Saldo Atual: R${balance.toFixed(2)}</h2>
    </div>
  );
};

export default App;

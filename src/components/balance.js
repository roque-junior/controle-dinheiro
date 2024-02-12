// src/components/Balance.js
import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const transactions = useSelector(state => state.transactions);

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalOutcome = transactions
    .filter(transaction => transaction.type === 'outcome')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const balance = totalIncome - totalOutcome;

  return (
    <div>
      <h2>Saldo Atual</h2>
      <p>Total de Entradas: {totalIncome}</p>
      <p>Total de Saídas: {totalOutcome}</p>
      <p>Saldo: {balance}</p>
    </div>
  );
};

export default Balance;

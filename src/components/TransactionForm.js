// src/components/TransactionForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../actions/transactionActions';

const TransactionForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    
    dispatch(addTransaction({ description, amount: parseFloat(amount), type }));
    
    setDescription('');
    setAmount('');
    setType('income');
  };

  return (
    <div>
      <h2>Adicionar Transação</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Descrição:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Valor:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          Tipo:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Entrada</option>
            <option value="outcome">Saída</option>
          </select>
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default TransactionForm;

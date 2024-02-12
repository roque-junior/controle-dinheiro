// App.js
import React from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

const App = () => {
  return (
    <div>
      <h1>Controle de Finanças</h1>
      <TransactionForm />
      <TransactionList />
    </div>
  );
};

export default App;

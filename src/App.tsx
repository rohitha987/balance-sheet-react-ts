// App.tsx
import React, { useState } from 'react';
import BalanceSheet from './components/BalanceSheet';
import TransactionForm from './components/TransactionForm';

interface Transaction {
  type: string;
  amount: number;
  date: string; // Add date property
}

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (type: string, amount: number, date: string) => {
    setTransactions((prev) => [...prev, { type, amount, date }]);
  };

  return (
    <div className="App">
      <h1>Balance Sheet</h1>
      <TransactionForm addTransaction={addTransaction} />
      <BalanceSheet transactions={transactions} />
    </div>
  );
};

export default App;

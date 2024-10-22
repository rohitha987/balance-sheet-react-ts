// BalanceSheet.tsx
import React from 'react';


interface Transaction {
  type: string;
  amount: number;
  date: string;
}

interface BalanceSheetProps {
  transactions: Transaction[];
}

const BalanceSheet: React.FC<BalanceSheetProps> = ({ transactions }) => {
  const totalDebited = transactions
    .filter(t => t.type === 'debit')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalCredited = transactions
    .filter(t => t.type === 'credit')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalCredited - totalDebited;

  return (
    <div className="balance-sheet">
      <h2>Transactions</h2>
      <p className="total">Total Credited: <span>${totalCredited}</span></p>
      <p className="total">Total Debited: <span>${totalDebited}</span></p>
      <p className="balance">Balance: <span>${balance}</span></p>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={index} className={`transaction ${transaction.type}`}>
            {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)} of ${transaction.amount} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BalanceSheet;

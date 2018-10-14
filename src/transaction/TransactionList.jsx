import React from 'react';

const TransactionList = ({ transactions }) => (
  <div className="transaction__list">
    <table id="transaction-list">
      <thead>
        <tr>
          <th>Transaction Id</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>

        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.transactionType}</td>
            <td>{new Date(transaction.transactionDate).toUTCString()  }</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionList;

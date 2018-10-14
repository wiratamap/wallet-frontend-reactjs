import React from 'react';

const TransactionForm = props => (
  <div className="transaction__form">
    <form onSubmit={props.transactionSubmit}>
      <label>Amount</label>
      <input
        required
        min={10000}
        id="amount"
        type="number"
        value={props.amount}
        onChange={props.amountChange}
      />
      <br />
      <label>Transaction Type</label>
      <select id="transaction-type" onChange={props.transactionTypeChange} value={props.transactionType}>
        <option value="CREDIT">Deposit</option>
        <option value="DEBIT">Withdraw</option>
      </select>
      <br />
      <input type="submit" id="submit-button" />
    </form>
  </div>
);

export default TransactionForm;

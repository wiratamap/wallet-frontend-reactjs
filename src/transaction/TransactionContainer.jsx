import React, { Component } from 'react';
import TransactionList from './TransactionList';
import TransactionService from './TransactionService';
import TransactionForm from "./TransactionForm";
import Message from "./Message";
import '../Application.css'

export default class TransactionContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      transaction: {
        amount: '',
        transactionType: 'CREDIT',
      },
      message: {
        error: '',
        success: '',
      },
    };
  }

  async componentDidMount() {
    const response = await TransactionService.getTransactionHistories();
    this.setState({
      transactions: response.data,
    });
  }

  render() {
    const { transactions } = this.state;
    return (
      <div className="transaction">
        <TransactionForm
          amountChange={this.amountChange}
          transactionTypeChange={this.transactionTypeChange}
          transactionSubmit={this.transactionSubmit}
          amount={this.state.transaction.amount}
          transactionType={this.state.transaction.transactionType}/>
        <TransactionList transactions={transactions} />
        <Message message={this.state.message} />
      </div>
    );
  }

  amountChange = (event) => {
    this.setState({
      transaction: {...this.state.transaction, amount: event.target.value}
    })
  };

  transactionTypeChange = (event) => {
    this.setState({
      transaction: {...this.state.transaction, transactionType: event.target.value}
    })
  };

  transactionSubmit = async (event) => {
    event.preventDefault();

    const newTransaction = {
      transactionType: this.state.transaction.transactionType,
      amount: this.state.transaction.amount,
    };

    TransactionService.postTransaction(newTransaction)
      .then(async () => {
        const response = await TransactionService.getTransactionHistories();

        this.setState({
          transactions: response.data,
          transaction: {
            amount: '',
            transactionType: 'CREDIT',
          },
          message: {
            success: 'Transaction Success',
          }
        });
      })
      .catch((error) => {
      const message = error.response.data.message;
      this.setState({
        message: {
          error: message,
        }
      });

    });


  }
}

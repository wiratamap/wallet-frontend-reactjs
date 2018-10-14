/* global describe it expect */
import { shallow } from 'enzyme/build';
import React from 'react';
import mockAxios from 'axios';
import TransactionContainer from './TransactionContainer';

describe('Transaction Container', () => {
  const component = () => shallow(<TransactionContainer />);

  beforeEach(() => {
    mockAxios.get.mockClear();
    mockAxios.post.mockClear();
  });

  describe('render', () => {
    it('should have Transaction List component', () => {
      expect(component().find('TransactionList').length).toBe(1);
    });

    it('should retrieve the transactions props from container to TransactionList', () => {
      expect(component().find('TransactionList').props().transactions).toBeTruthy();
    });

    it('should retrieve the amountChange callback on TransactionForm component props', () => {
      expect(component().find('TransactionForm').props().amountChange).toBeInstanceOf(Function);
    });

    it('should retrieve the transactionType callback on TransactionForm component props', () => {
      expect(component().find('TransactionForm').props().transactionTypeChange).toBeInstanceOf(Function);
    });

    it('should retrieve the transactionSubmit callback on TransactionForm component props', () => {
      expect(component().find('TransactionForm').props().transactionSubmit).toBeInstanceOf(Function);
    });
  });

  describe('component did mount', () => {
    it('should call the transaction service once', async () => {
      component();
      mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: [],
      }));

      await Promise.resolve();

      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('amountChange', () => {
    it('should change the amount state when amount is change', () => {
      const event = {
        target: {
          value: '15000',
        },
      };

      const containerComponent = shallow(<TransactionContainer />);

      containerComponent.instance().amountChange(event);

      expect(containerComponent.state().transaction.amount).toEqual('15000');
    });
  });

  describe('transactionTypeChange', () => {
    it('should change the transactionType state when transaction type is change', () => {
      const event = {
        target: {
          value: 'DEBIT',
        },
      };

      const containerComponent = shallow(<TransactionContainer />);

      containerComponent.instance().transactionTypeChange(event);

      expect(containerComponent.state().transaction.transactionType).toEqual('DEBIT');
    });
  });

  describe('transactionSubmit', () => {
    it('should post new transaction into the endpoint given', async () => {
      const containerComponent = shallow(<TransactionContainer />);

      mockAxios.post.mockImplementationOnce(() => Promise.resolve({
        data: {
          id: '123',
          amount: 15000,
          transactionType: 'CREDIT',
          transactionDate: 1537493705061,
        },
      }));

      await containerComponent.instance().transactionSubmit({ preventDefault: () => {} });

      expect(mockAxios.post).toHaveBeenCalled();
    });
  });
});

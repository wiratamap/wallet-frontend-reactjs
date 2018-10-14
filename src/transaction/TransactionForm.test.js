/* global describe it expect */
import { shallow } from 'enzyme';
import React from 'react';
import TransactionForm from './TransactionForm';

describe('Transaction Form', () => {
  const defaultComponent = () => shallow(<TransactionForm />);

  describe('render', () => {
    it('should have amount input', () => {
      expect(defaultComponent().find('#amount').length).toEqual(1);
    });

    it('should have transaction type input', () => {
      expect(defaultComponent().find('#transaction-type').length).toEqual(1);
    });

    it('should have submit button', () => {
      expect(defaultComponent().find('#submit-button').length).toEqual(1);
    });

    it('should have retrieve amount props in props input', () => {
      const formComponent = shallow(<TransactionForm />);

      formComponent.setProps({ amount: 10000 });
      expect(formComponent.find('#amount').props().value).toEqual(10000);
    });

    it('should have proper option value on select transaction-type element', () => {
      expect(defaultComponent().find('#transaction-type').find('option').at(0)
        .props().value).toEqual('CREDIT');
      expect(defaultComponent().find('#transaction-type').find('option').at(1)
        .props().value).toEqual('DEBIT');
    });

    it('should call onChange callback when value of amount is change', () => {
      const mockAmountChange = jest.fn();

      const formComponent = shallow(<TransactionForm />);
      formComponent.setProps({ amountChange: mockAmountChange });
      formComponent.find('#amount').simulate('change');

      expect(mockAmountChange).toHaveBeenCalled();
    });

    it('should call onChange callback when value transaction type is change', () => {
      const mockTransactionTypeChange = jest.fn();

      const formComponent = shallow(<TransactionForm />);
      formComponent.setProps({ transactionTypeChange: mockTransactionTypeChange });
      formComponent.find('#transaction-type').simulate('change');

      expect(mockTransactionTypeChange).toHaveBeenCalled();
    });

    it('should call onSubmit callback when submit transaction', () => {
      const mockTransactionSubmit = jest.fn();

      const formComponent = shallow(<TransactionForm />);
      formComponent.setProps({ transactionSubmit: mockTransactionSubmit });
      formComponent.find('form').simulate('submit');

      expect(mockTransactionSubmit).toHaveBeenCalled();
    });
  });
});

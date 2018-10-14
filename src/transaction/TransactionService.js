import axios from 'axios';
import apis from '../api-list';
import 'url-search-params-polyfill';

export default class TransactionService {
  static getTransactionHistories() {
    return axios.get(apis.getTransactionHistoriesUrl, {
      params: {
        account_id: '0dce0a31-321a-4f42-9261-d59ed9ad4308',
      },
    });
  }

  static postTransaction(newTransaction) {
    const params = new URLSearchParams();
    params.append('transaction_type', newTransaction.transactionType);
    params.append('amount', newTransaction.amount);

    return axios.post(apis.postTransaction, params);
  }
}

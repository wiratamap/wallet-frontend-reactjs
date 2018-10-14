import axios from 'axios';
import apis from '../api-list';

export default function getWalletData() {
  return axios.get(apis.getWalletDataUrl);
}

import axios from 'axios';

const BASE_URL = 'https://crudcrud.com/api/f853888d1ccc43c1b0b15d9eddb3b374';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;





import axios from 'axios';

const baseURL = 'https://drink-master-project-zi2s.onrender.com';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;

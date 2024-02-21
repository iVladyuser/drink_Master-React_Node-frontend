import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-project-zi2s.onrender.com';

export const getDrinkById = async drinkId => {
  const url = `/drinks/${drinkId}`;
  const response = await axios.get(url);
  return response.data;
};

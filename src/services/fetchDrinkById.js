import { instance } from './fetchAuth';

// export const getDrinkById = async drinkId => {
//   const url = `/drinks/${drinkId}`;
//   const response = await instance.get(url);
//   return response.data;
// };

export const getDrinkById = async drinkId => {
  try {
    const url = `/drinks/${drinkId}`;
    const { data } = await instance.get(url);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

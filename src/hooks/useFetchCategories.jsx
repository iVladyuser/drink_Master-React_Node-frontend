import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/fetchCategories&Glasses';

export const useFetchCategories = () => {
  const [drinkCategories, setDrinkCategories] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCategories('');
        setDrinkCategories(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { drinkCategories, isLoading, error };
};

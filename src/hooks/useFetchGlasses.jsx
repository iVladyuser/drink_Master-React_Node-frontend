import { useState, useEffect } from 'react';
import { fetchGlasses } from '../services/fetchCategories&Glasses';

export const useFetchGlasses = () => {
  const [drinkGlasses, setDrinkGlasses] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchGlasses('', controller);
        setDrinkGlasses(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { drinkGlasses, isLoading, error };
};

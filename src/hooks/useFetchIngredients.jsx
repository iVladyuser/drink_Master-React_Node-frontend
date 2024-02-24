import { useState, useEffect } from 'react';
import { fetchIngredients } from '../services/fetchOwnDrinks';

export const useFetchIngredients = () => {
  const [ingredientsItems, setIngredientsItems] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchIngredients('', controller);
        setIngredientsItems(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchData();
  }, []);

  return { ingredientsItems, isLoading, error };
};

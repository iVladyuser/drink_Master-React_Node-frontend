import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SelectList } from '../Select/SelectList';

import {
  Button,
  Form,
  Input,
  SearchIconWrap,
  SearchWrapper,
  SearchIcon,
} from './DrinksSearch.styled';

import {
  fetchCategories,
  fetchIngredients,
} from '../../../redux/filters/operations';
import { fetchCocktailsByParams } from '../../../redux/drinks/operations';
import {
  selectCategories,
  selectIngredients,
} from '../../../redux/filters/selectors';
import { getUrlParams } from '../../../hooks/getUrlParams';

export const DrinksSearch = ({ shouldRenderBtn, page, limit, updPage }) => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);

  const ingredientsNames = ingredients.map(ingredient => ingredient.title);
  const categoriesNames = categories.map(category => category.name);

  const { cocktailName, categoryName, ingredientName } = getUrlParams();
  const [inputValue, setInputValue] = useState(
    cocktailName ? cocktailName : ''
  );

  useEffect(() => {
    if (!categories.length) dispatch(fetchCategories());
    if (!ingredients.length) dispatch(fetchIngredients());
  }, [categories.length, ingredients.length, dispatch]);

  useEffect(() => {
    const getFilteredCocktails = async () => {
      const params = {};

      if (cocktailName) {
        params.drink = cocktailName;
      }

      if (categoryName) {
        params.category = categoryName;
      }

      if (ingredientName) {
        params['ingredients.title'] = ingredientName;
      }

      params.page = page;
      params.limit = limit;

      dispatch(fetchCocktailsByParams(params));
    };
    getFilteredCocktails();
  }, [
    searchParams,
    cocktailName,
    categoryName,
    ingredientName,
    page,
    limit,
    dispatch,
  ]);

  const updateSearchParams = (paramName, paramValue, zeroValue) => {
    const queryParams = getUrlParams();

    if (paramValue !== zeroValue) {
      queryParams[paramName] = paramValue;
    } else {
      delete queryParams[paramName];
    }

    if (queryParams.page) {
      queryParams.page = 1;
    }
    updPage(0);

    const searchString = new URLSearchParams(queryParams).toString();
    window.history.pushState({}, '', `?${searchString}`);
    setSearchParams(queryParams);
  };

  const handleSearchByValue = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const cocktailName = form.elements.query.value.trim();
    updateSearchParams('cocktailName', cocktailName, '');
  };

  const handleSearchByCategory = categoryName => {
    updateSearchParams('categoryName', categoryName, 'All categories');
  };

  const handleSearchByIngredient = ingredientName => {
    updateSearchParams('ingredientName', ingredientName, 'All ingredients');
  };

  return (
    <SearchWrapper>
      <Form onSubmit={handleSearchByValue}>
        <label>
          <Input
            type="text"
            placeholder="Enter the text"
            name="query"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </label>
        {shouldRenderBtn && (
          <Button type="submit">
            <SearchIconWrap>
              <SearchIcon />
            </SearchIconWrap>
          </Button>
        )}
      </Form>
      <SelectList
        items={categoriesNames}
        placeholder={categoryName || 'All categories'}
        height="405px"
        onSelect={handleSearchByCategory}
      />
      <SelectList
        items={ingredientsNames}
        placeholder={ingredientName || 'All ingredients'}
        height="295px"
        onSelect={handleSearchByIngredient}
      />
    </SearchWrapper>
  );
};

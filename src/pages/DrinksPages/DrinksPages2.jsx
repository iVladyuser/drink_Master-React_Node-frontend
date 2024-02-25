import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

import { PageTitle } from './PageTitle/PageTitle';
import { DrinksSearch } from './DrinksSearch/DrinksSearch';
import { Loader } from 'components/Loader/Loader';
import { CocktailCard } from './CocktailCard/CocktailCard';
import { Paginator } from './DrinksPaginator/DrinksPaginator';
import { InfoComponent } from './InfoComponent/InfoComponent';

import { getUrlParams } from '../../hooks/getUrlParams';
import {
  selectCocktails,
  selectIsLoading,
  selectTotalCocktails,
} from '../../redux/drinks/selectors';
import { setSelectedRoute } from '../../redux/route/slice';

import {
  DrinksSection,
  CommonContainer,
  Wrapper,
  CocktailsList,
} from './DrinksPages2.styled';

const DrinksPages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = searchParams.get('page')
    ? Number(searchParams.get('page')) - 1
    : 0;

  const cocktails = useSelector(selectCocktails);
  const totalCocktails = useSelector(selectTotalCocktails);
  const isLoading = useSelector(selectIsLoading);

  console.log('cocktails', cocktails);
  console.log('totalCocktails', totalCocktails);

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [limit, setLimit] = useState(9);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3);
  const allParams = getUrlParams();

  const [shouldRenderButtonSearch, setShouldRenderButtonSearch] =
    useState(false);
  const errorReason = currentPage + 1 > Math.ceil(totalCocktails / limit);

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(allParams).toString();
    dispatch(setSelectedRoute(`${location.pathname}?${params}`));
  }, [dispatch, location, allParams]);

  const updLimit = () => {
    if (window.innerWidth >= 1440) {
      setLimit(9);
      setShouldRenderButtonSearch(true);
      setPageRangeDisplayed(6);
    } else if (window.innerWidth >= 768) {
      setLimit(10);
      setShouldRenderButtonSearch(true);
    } else {
      setLimit(10);
      setPageRangeDisplayed(3);
      setShouldRenderButtonSearch(false);
    }
  };
  useEffect(() => {
    updLimit();
    window.addEventListener('resize', updLimit);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    return () => {
      window.removeEventListener('resize', updLimit);
    };
  }, []);

  const updatePageParams = page => {
    const queryParams = getUrlParams();

    queryParams.page = page;

    const searchString = new URLSearchParams(queryParams).toString();
    window.history.pushState({}, '', `?${searchString}`);
    setSearchParams(queryParams);
  };

  const displayCocktails = cocktails.slice(0, limit).map(cocktail => (
    <li key={cocktail._id}>
      <CocktailCard data={cocktail} />
    </li>
  ));

  const handlePageChange = page => {
    updatePageParams(page + 1);
    setCurrentPage(page);
  };

  return (
    <DrinksSection>
      <CommonContainer>
        <PageTitle>Drinks</PageTitle>
        <DrinksSearch
          page={currentPage + 1}
          limit={limit}
          shouldRenderBtn={shouldRenderButtonSearch}
          updPage={setCurrentPage}
        />

        {isLoading ? (
          <Loader />
        ) : (
          cocktails.length > 0 &&
          !errorReason && (
            <Wrapper>
              <CocktailsList>{displayCocktails}</CocktailsList>
              {totalCocktails > limit && (
                <Paginator
                  limit={limit}
                  currentPage={currentPage}
                  itemsLength={totalCocktails}
                  handlePageChange={handlePageChange}
                  pageRangeDisplayed={pageRangeDisplayed}
                />
              )}
            </Wrapper>
          )
        )}
        {!isLoading && (errorReason || cocktails.length === 0) && (
          <Wrapper>
            <InfoComponent>
              We didn`t find anything by your request or some error occured.
            </InfoComponent>
          </Wrapper>
        )}
      </CommonContainer>
    </DrinksSection>
  );
};

export default DrinksPages;

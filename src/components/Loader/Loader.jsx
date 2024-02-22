import Lottie from 'lottie-react';
import CocktailLoading from './animation/CocktailLoading.json'
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Lottie animationData={CocktailLoading} loop />
    </LoaderContainer>
  );
};
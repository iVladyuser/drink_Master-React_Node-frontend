import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  }

body {
  font-family: 'Manrope', sans-serif;
  }

button {
  font-family: 'Manrope', sans-serif;
  cursor: pointer;
}
  
ul, 
ol {
    list-style: none;
  }

img {
    display: block;
    max-width: 100%;
    height: auto;
  }

a {
    text-decoration: none;
    color: inherit;
  }  
`;

export const Container = styled.div`
  width: 320px;
  margin: 24px auto 0;
  padding: 0px 20px 40px;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 40px auto 0;
    padding: 0px 32px 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0;
    padding: 0px 112px 56px;
  }
`;

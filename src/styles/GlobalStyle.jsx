import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
    src: url('../../assets/fonts/Manrope-Regular.ttf') format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    src: url('../../assets/fonts/Manrope-Medium.ttf') format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    src: url('../../assets/fonts/Manrope-SemiBold.ttf') format('ttf');
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-display: swap;
    font-style: normal;
  }

 :root {
    --main-white: #F3F3F3;
    --white-transp-eighty: #F3F3F380;
    --white-transp-fifty: rgba(243, 243, 243, 0.5);
    --white-transp-forty: rgba(243, 243, 243, 0.4);
    --white-transp-thirty: rgba(243, 243, 243, 0.3);
    --white-transp-twenty: rgba(243, 243, 243, 0.2);
    --welcomepage-text: #FAFAFA;

    --main-dark: #0A0A11;
    --grey-transp-thirty-light-theme: rgba(10, 10, 17, 0.3);
    --grey-transp-twenty-light-theme:rgba(22, 31, 55, 0.2);
    --grey-transp-fifty-light-theme:rgba(22, 31, 55, 0.5);

    --main-blue: #161F37;
    --blue-transp-eighty: rgba(22, 31, 55, 0.8);
    --blue-transp-fifty: rgba(22, 31, 55, 0.5);
    --hover-light-blue: rgba(64, 112, 205, 0.5);
    --hover-light-blue-light-theme: ##4070cd;
    --hover-dark-blue-light-theme:#050e24;
    --link-blue: #253d6f;
    --btn-cancel-disabled-blue: #434D67;

   
    --main-green:#BCE6D2;
    --border-green: #3cbc817f;
    --success-green: #3CBC81;
    --border-red: #da14147f;
    --error-red: #da1414;

    --bluefifty-color: rgba(22, 31, 55, 0.5);

    --transition: 300ms linear; 
  }

html {
  scroll-behavior: smooth;
  }

body {
  font-family: 'Manrope', sans-serif;
  background-color: var(--main-dark);
  color: var(--main-white);
  word-wrap: break-word;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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

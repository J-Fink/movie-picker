import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --titleBackground: var(--inverseBackground);
    --ratingBackground: var(--inverseBackground);
    --titleTextColor: #fbffbf;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --logo: #fde276;
    --background: linear-gradient(0.45turn, grey, white);
    --inverseBackground: linear-gradient(0.45turn, white, grey);
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --border-color: #00000033;
    --headerHeight: 96px;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    /* background-color: var(--background); */
    background: var(--background);
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
    min-height: 100vh;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--inverseBackground);
  }
`;
const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 40px auto;
  padding: 2rem;
  text-align: center;
  margin-top: var(--headerHeight);
`;
export default function Page({ children }) {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <InnerStyles>{children}</InnerStyles>
      </div>
    );
  }
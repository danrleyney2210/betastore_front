import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.body};
  }

  body, input, button , textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  html{
    scroll-behavior: smooth;
  }

  .container {
    max-width: 1216px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: 1220px) {
      padding: 0 24px;
    }
  }

  h1, h2,h3,h4,h5,p,span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;
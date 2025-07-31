// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        background-color: #0f0f0f;
        color: #e0e0e0;
        line-height: 1.6;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
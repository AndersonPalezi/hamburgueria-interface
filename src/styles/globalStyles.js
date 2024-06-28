import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #007bff;
        --secondary-color: #6000;
        --tertiary-color: #28a745;
        --quaternary-color: #D8FF3C;
        --quinary-color: #17a2b8;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    button {
        cursor: pointer;
    }
    h1 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--primary-color);
        font-family: "Titan One", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.75rem;
        color: var(--primary-color);
    }

    p {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        color: var(--tertiary-color);
        font-family: "Anton", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    
`;
export default GlobalStyles;
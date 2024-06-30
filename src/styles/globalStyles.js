import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css' ;

const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #fff;
        --secondary-color: #000;
        --tertiary-color: #006400;
        --quaternary-color: #D8FF3C;
        --quinary-color: #8BC34A;
        --sextary-color: #F44336;
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
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 1rem;
        font-family: "Titan One", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    span{
        font-family: "Anton", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    a ,button {
        cursor: pointer;
    }

    h3 {
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 0.75rem;
        
    }

    p {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        font-family: "Anton", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
    
`;
export default GlobalStyles;
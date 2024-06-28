import styled from "styled-components";

export const Container = styled.div`
display: flex;
background: linear-gradient(03deg, #D8FF3C, #000000);
background-size: cover;
background-position: center;
height: 100vh;
width: 100vw;

`;
export const Img__Container = styled.div`
 img.hamburguer {
  /* Estilos para a imagem hamburguer */
    width: 30%; /* Exemplo de largura total */
    height: auto; /* Para manter a proporção */
    display: flex; /* Remove espaços verticais entre imagens */
    align-items: center;
    justify-content: center;
    margin-left: 10rem;
    margin-top: 3rem;
    position: relative; /* Define a posição relativa para permitir o z-index */
    z-index: 6; /* Coloca a imagem hamburguer na frente */
}

img.folhas {
  /* Estilos para a imagem folhas */
    width: 60%; /* Exemplo de largura total */
    height: auto; /* Para manter a proporção */
    display: flex; /* Remove espaços verticais entre imagens */
    margin-top: -450px; /* Ajusta o posicionamento vertical */
    margin-left: 3rem; /* Ajusta o posicionamento horizontal */
    position: relative; /* Define a posição relativa para permitir o z-index */
    z-index: 1; /* Coloca a imagem folhas atrás da imagem hamburguer */
}
    
figcaption {
  /* Estilos para a tag <figcaption> */
    display: flex; /* Posiciona absolutamente em relação ao container pai (.img-container) */
    margin-left: 8rem;
    transform: translateX(-50%); /* Centraliza completamente */
    font-size: 20px; /* Tamanho inicial */
    animation: pulse 3s infinite alternate; /* Aplica a animação 'pulse' */
}

@keyframes pulse {
    0% {
    transform: scale(1);
    }
    50% {
    transform: scale(1.1);
    }
    100% {
    transform: scale(1);
    }
}

`;
export const H1 = styled.h1`
&.bemVindo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-right:11rem ;
    }

`;
export const P = styled.h2`
font-family: "Anton", sans-serif;
font-weight: 400;
font-style: bold;
font-size: 15px;
margin-right: 8rem;

`;
export const Form = styled.form`

`;
export const Input__Container = styled.div`

`;
export const Button__logar = styled.button`

`;
export const H3 = styled.h3`

`;


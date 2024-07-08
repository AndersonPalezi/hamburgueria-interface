// src/components/CategoryCarousel/styles.js
import styled from 'styled-components';
import backgroundImg from './img-categorias/background-site.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: url(${backgroundImg}) no-repeat center center fixed; /* Imagem de fundo */
    background-size: cover; /* Cobertura total */
    min-height: 100vh; /* Altura mínima para ocupar toda a tela */
`;

export const H1 = styled.h1`
    font-family: "Ga Maamli", sans-serif;
    font-size: 2em;
    margin-bottom: 20px;
    text-shadow: 0 -1px 4px #00FF00, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;
    color: #FFFFFF;
`;

export const Carousel = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px; /* Espaçamento entre as figuras */
`;

export const Figure = styled.figure`
    text-align: center;
    position: relative; /* Permite posicionar a borda absolutamente */
    

    img {
        width: 200px; /* Tamanho desejado para as imagens */
        height: 200px; /* Tamanho desejado para as imagens */
        border-radius: 5px;
        object-fit: cover; /* Para manter proporções */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Transição para o efeito de zoom */
    
    }

    figcaption {
        font-family: "Ga Maamli", sans-serif;
        display: flex;
        justify-content: center;
        margin-top: 1px;
        font-size: 1.4em;
        color: #000;
        background-color: #00FF00;
        border-radius: 5px; /* Borda arredondada para o fundo */
        padding: 4px; /* Espaçamento interno */
        position: absolute; /* Posicionamento absoluto para centralizar */
        bottom: 0px; /* Distância do fundo */
        left: 0;
        right: 0;
    }

    &:hover {
        transform: scale(1.1); /* Aumenta o tamanho da imagem em 10% */

        &::before {
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;
            border: 3px solid #00FF00; /* Cor da borda verde fluorescente */
            border-radius: 12px; /* Mesmo valor do border-radius da imagem */
        }
    }
`;

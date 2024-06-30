import styled from "styled-components";

export const Login__Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 80%;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  
`;

export const Img__Container = styled.div`
.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem cubra todo o espaço */
    opacity: 1; /* Ajuste a opacidade conforme necessário */
    z-index: -1; /* Coloca a imagem de fundo atrás dos outros elementos */
  }
  .hamburguer {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10rem;
    margin-top: 2rem;
    position: relative;
  }
    .folhas {
    width: 80%;
    height: auto;
    display: flex;
    margin-top: -540px;
    margin-left: 3rem;
    z-index: 1;
  }

  figcaption {
    display: flex;
    margin-left: 8rem;
    transform: translateX(-50%);
    animation: pulse 3s infinite alternate;
    .code__byte{
      color: var(--quinary-color);
    }
    
    
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
    margin-top: 2rem;
    font-weight: bold;
    color: var(--tertiary-color);
    
  }
`;

export const P = styled.h2`
  font-size: 1.2em;
  line-height: 1.5;
  max-width: 600px;
  text-align: center;
  span{
    color: var(--tertiary-color);
  }
  &.description{
    color:var(--quinary-color);
  }
  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Input__Container = styled.div`
margin: 1rem 0;
label {
    margin-bottom: 5px;
    font-weight: bold;
    color: var(--tertiary-color);
  }
  input{
    padding: 9px;
    width: 100%;
    border: none;
    border-radius: 10px;
    text-decoration: none;
  }
  p{
    font-size: 10px;
    color: var(--sextary-color);
    height: 10px; /* altura fixa */
    margin: 0; /* remover margem */
    
    
  }

`;

export const H3 = styled.h3`
  font-size: 1em;
  margin: 10px 0;
  text-align: center;
  color: var(--tertiary-color);
  &.recovery {
    align-self: flex-end;
    margin-right: 15rem;
    margin-top: -9px;
    font-size: 0.5em;
    color: var(--tertiary-color);
  }
  .click__here{
    color: var(--sextary-color);
    cursor: pointer;
  }
`;

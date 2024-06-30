import React from 'react';
import { ContainerButton } from './styles'; // Certifique-se de que ContainerButton está definido em ./styles
import PropTypes from 'prop-types'; // Importando prop-types para validar as propriedades.

// Componente Button: recebe children (conteúdo interno) e outras props (propriedades) como parâmetros
const Button = ({ children, ...props }) => {
    return (
    // ContainerButton: um botão estilizado, passando todas as props recebidas
    <ContainerButton {...props}>
    {children}
    </ContainerButton>
    );
};

// Definindo propTypes para o componente Button
Button.propTypes = {
  children: PropTypes.node.isRequired, // Validando que children é um nó React (pode ser string, número, elemento, etc.)
};

// Exportação do componente Button para ser utilizado em outros arquivos
export { Button };

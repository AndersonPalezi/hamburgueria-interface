import styled from "styled-components";

export const ContainerButton = styled.button`
    font-family: "Anton", sans-serif;
    width: 15rem;
    height: 35px;
    border: 0;
    border-radius: 10px;
    background-color: var(--quinary-color);
    font-size: 1rem;
    color: var(--secondary-color);

    &:hover {
    background-color: var(--tertiary-color);
    color:var(--secondary-color);
    font-weight: bold;
    border: 1px solid var(--quaternary-color);
    }
`;
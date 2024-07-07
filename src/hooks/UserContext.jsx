import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        id: '', // Inicialmente vazio
        // Outros dados do usuário aqui, como email, nome, etc.
    });
    // useEffect para carregar os dados do localStorage ao inicializar
    useEffect(() => {
        const loadUserData = async () => {
            try {
                const storedUserData = await localStorage.getItem("CodeByte_Burger_Bar:userData");
                if (storedUserData) {
                    setUserData(JSON.parse(storedUserData));
                }
            } catch (error) {
                console.error("Erro ao carregar dados do usuário do localStorage:", error);
            }
        };
        loadUserData();
    }, []);
    // Função assíncrona para atualizar os dados do usuário e armazenar no localStorage
    const putUserData = async (userInfo) => {
        setUserData(userInfo); // Atualiza o estado com os novos dados do usuário
        // Armazena os dados do usuário no localStorage
        await localStorage.setItem(
            "CodeByte_Burger_Bar:userData",
            JSON.stringify(userInfo)
        );
    };
    // Valor do contexto que será fornecido aos componentes consumidores
    const contextValue = { userData, putUserData };
    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para consumir o contexto do usuário
export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
// PropTypes para o UserProvider
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};



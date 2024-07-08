// src/components/CategoryCarousel/index.jsx
import React, { useEffect, useState } from "react";
import { Container, H1, Carousel, Figure } from "./styles";
import{ api} from "../../services/api"; // Importe a api corretamente

import imgBackground from "./img-categorias/background-site.jpg";

export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            try {
                const response = await api.get("/categories");
                setCategories(response.data); // Atualiza o estado com os dados da API
            } catch (error) {
                console.error("Error loading categories:", error);
            }
        }
        
        loadCategories(); // Chama a função de carregamento ao montar o componente
    }, []); // Array vazio indica que o useEffect será executado apenas uma vez

    return (
        <Container>
            <header>
                <H1>Categorias</H1>
            </header>
            <Carousel>
                {categories.map((category) => (
                    <Figure key={category.id} backgroundImage={imgBackground}>
                        <img src={category.image} alt={category.name} />
                        <figcaption>{category.name}</figcaption>
                    </Figure>
                ))}
            </Carousel>
        </Container>
    );
}

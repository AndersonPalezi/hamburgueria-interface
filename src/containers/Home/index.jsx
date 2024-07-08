import React from "react";
import videoFile from "../Home/img_home/logo-hamburger.mp4"; // ajuste o caminho conforme necessário
import { Container, Video as StyledVideo } from "./styles"; // Renomeie Video para StyledVideo
import { CategoryCarousel } from "../../components/CategoryCarousel"; // Corrigido o nome da importação


export function Home() {
    return (
        <Container>
            <StyledVideo autoPlay loop muted>
                <source src={videoFile} type="video/mp4" />
            </StyledVideo>
            <CategoryCarousel />
        </Container>
    );
}

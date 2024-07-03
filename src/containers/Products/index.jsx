import React from "react";

import ProductsLogo from "../../assets/logo_produtos.svg"
import {Container,HomeImg} from "./styles"

function Products(){
    return(
        <Container>
            <HomeImg src={ProductsLogo} alt="Logo de produtos" />
        </Container>
    )
}

import React from "react";
import ProductsLogo from "../../containers/Products/img_products/logo_produtos.svg";
import { Container, HomeImg } from "./styles";

function Products() {
    return (
        <Container>
            <HomeImg src={ProductsLogo} alt="Logo de produtos" />
        </Container>
    );
}

export default Products;

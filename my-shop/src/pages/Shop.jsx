import React from "react";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import Occasion from "../components/Occasion";
import Product from "../components/Product";

function Shop() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const occasion = searchParams.get("occasion") || "";

const product = searchParams.get("product") || "";

  return (
    <Container fluid className="my-5">

      {/* Shop By Occasion */}
      <Occasion />

      {/* Products */}
      <Product
        search={search}
        category={category}
        occasion={occasion}
        product={product}
      />


    </Container>
  );
}

export default Shop;
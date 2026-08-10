import React from "react";
import { useSearchParams } from "react-router-dom";

import Occasion from "../components/Occasion";
import Product from "../components/Product";

function Shop() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  return (
    <>
      <Occasion />

      <Product search={search} />
    </>
  );
}

export default Shop;
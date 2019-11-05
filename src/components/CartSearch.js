import React, { useState } from "react";
import ProductSearch from "./ProductSearch";
import Cart from "./Cart";
import styled from "styled-components";

const Section = styled.div`
  flex:1 1 auto;
  flex-direction: column;
  width: 100%;
  height:100%;
  padding: 0px;
  margin: 0px;
  align-content: center;
`;

const CartSearch = props => {
  const {
    products,
    cartItems,
    addItemToCart,
    substract,
    deleteFromCart
  } = props;
  const [search, setSearch] = useState([]);
  return (
    <Section>
      <ProductSearch products={products} setSearch={setSearch} />
      <Cart
        cartItems={cartItems}
        substract={substract}
        deleteFromCart={deleteFromCart}
        addItemToCart={addItemToCart}
        search={search}
      />
    </Section>
  );
};

export default CartSearch;

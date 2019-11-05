import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import EmptyCart from "./EmptyCart";

const Panel = styled.div`
  min-height: 80%;
  flex-grow: 1;
  background-color: white;
  padding: 5px;
  margin-top: 10px;
  width: 100%;
`;

const Cart = props => {
  const { search, cartItems, setCartItems, addItemToCart } = props;

  console.log(search);
  console.log(cartItems);

  return (
    <Panel>
      {search.length > 0 ? (
        search.map(searchItem => (
          <CartItem
            key={searchItem.id}
            {...searchItem}
            setCartItems={setCartItems}
            addItemToCart={addItemToCart}
          />
        ))
      ) : cartItems.length > 0 ? (
        cartItems.map(cartItem=>(
            <CartItem
            key={cartItem.id}
            {...cartItem}
            setCartItems={setCartItems}
            addItemToCart={addItemToCart}
            />
        ))
      ) : (
        <EmptyCart />
      )}
    </Panel>
  );
};

export default Cart;

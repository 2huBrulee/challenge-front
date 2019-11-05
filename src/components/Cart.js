import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import EmptyCart from "./EmptyCart";

const Panel = styled.div`
  min-height: 80%;
  background-color: white;
  margin-top: 10px;
  width: 100%;
`;

const Cart = props => {
  const { search, cartItems, addItemToCart,substract,deleteFromCart } = props;

  return (
    <Panel>
      {search.length > 0 ? (
        search.map(searchItem => (
          <CartItem
            key={searchItem.id}
            {...searchItem}
            cartItems ={cartItems}
            addItemToCart={addItemToCart}
            deleteFromCart={deleteFromCart}
            substract={substract}
          />
        ))
      ) : cartItems.length > 0 ? (
        cartItems.map(cartItem=>(
            <CartItem
            key={cartItem.id}
            {...cartItem}
            cartItems ={cartItems}
            addItemToCart={addItemToCart}
            deleteFromCart={deleteFromCart}
            substract={substract}
            />
        ))
      ) : (
        <EmptyCart />
      )}
    </Panel>
  );
};

export default Cart;

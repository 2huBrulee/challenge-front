import React, { useState } from "react";
import styled from "styled-components";
import OrderInfo from "../components/OrderInfo";
import CartSearch from "../components/CartSearch";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";

const GET_PRODUCTS = gql`
  {
    products {
      name
      id
      unitPrice
      description
    }
  }
`;

const Content = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  min-height: 100%;
`;

const Column = styled.div`
  flex: 50%;
  margin: 5%;
`;

const calculateTotalPrice = cart => cart.length>0 ? cart.reduce((sum,cartItem)=>{
    console.log(sum)
    console.log(cartItem)
    return sum+cartItem.unitPrice*cartItem.quantity},0):0;

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const { data } = useQuery(GET_PRODUCTS);

  const addItemToCart = newCartItem => {
    let foundFlag = false;
    const newItems = cartItems.map(cartItem => {
      if (cartItem.id === newCartItem.id) {
        foundFlag = true;
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    if (foundFlag === true) setCartItems(newItems);
    else setCartItems([...newItems, newCartItem]);
  };

  return (
    <Content>
      <Column>
        <CartSearch
          cartItems={cartItems}
          setCartItems={setCartItems}
          addItemToCart={addItemToCart}
          products={data ? data.products : []}
        />
      </Column>
      <Column>
        <OrderInfo totalPrice={calculateTotalPrice(cartItems)} />
      </Column>
    </Content>
  );
};

export default Shop;

import React, { useState } from "react";
import styled from "styled-components";
import OrderInfo from "../components/OrderInfo";
import CartSearch from "../components/CartSearch";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";
import { navigate } from "@reach/router";

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

const CREATE_ORDER = gql`
  mutation CreateOrder($products: [OrderProduct!]!) {
    createOrder(products: $products)
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

const calculateTotalPrice = cart => {
  console.log(cart);
  return cart.length > 0
    ? cart.reduce((sum, cartItem) => {
        console.log(sum);
        console.log(cartItem);
        return sum + cartItem.unitPrice * cartItem.quantity;
      }, 0)
    : 0;
};

const getCartDataForOrder = cart =>
  cart.map(item =>
    Object.keys(item)
      .filter(key => key === "id" || key === "quantity")
      .reduce(
        (newObject, currKey) => ({ ...newObject, [currKey]: item[currKey] }),
        {}
      )
  );

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const { data } = useQuery(GET_PRODUCTS);
  const [createOrder] = useMutation(CREATE_ORDER);

  const createNewOrder = () => {
    console.log("eweeee");
    const newOrderProducts = getCartDataForOrder(cartItems);
    console.log(newOrderProducts);
    createOrder({
      variables: { products: newOrderProducts }
    }).then(result => {
      console.log(result);
      navigate(`/ordenProcesada/${result.data.createOrder}`);
    });
  };

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

  const substract = itemId => {
    let foundFlag = false;
    let deletionFlag = false;
    const newItems = cartItems.map(cartItem => {
      if (cartItem.id === itemId) {
        foundFlag = true;
        if (cartItem.quantity < 1) deletionFlag = true;
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    if (foundFlag === true) {
      if (deletionFlag === true) deleteFromCart(itemId);
      else setCartItems(newItems);
    }
    return foundFlag && !deletionFlag;
  };

  const deleteFromCart = itemId => {
    const newItems = cartItems.filter(cartItem => cartItem.id !== itemId);
    setCartItems(newItems);
  };

  return (
    <Content>
      <Column>
        <CartSearch
          cartItems={cartItems}
          addItemToCart={addItemToCart}
          substract={substract}
          deleteFromCart={deleteFromCart}
          products={data ? data.products : []}
        />
      </Column>
      <Column>
        <OrderInfo
          totalPrice={calculateTotalPrice(cartItems)}
          createNewOrder={createNewOrder}
        />
      </Column>
    </Content>
  );
};

export default Shop;

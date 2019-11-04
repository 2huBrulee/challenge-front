import React, { useState} from "react";
import styled from "styled-components";
import OrderInfo from "../components/OrderInfo";
import CartSearch from "../components/CartSearch";
import gql from 'graphql-tag';
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

const Shop = () => {
  const [cartItems, setCartitems] = useState([]);
  const { data } = useQuery(GET_PRODUCTS);

  return (
    <Content>
      <Column>
        <CartSearch cartItems={cartItems} setCartitems={setCartitems} products={data?data.products:[]}/>
      </Column>
      <Column>
        <OrderInfo cartItems/>
      </Column>
    </Content>
  );
};

export default Shop;

import React from "react";
import StyledLink from "../components/StyledLink";
import styled from "styled-components";

const Content = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;
`;

const Title = styled.div`
  font-size: 30px;
  margin: 20px;
`;

const OrderInfo = styled.div`
  font-size: 12;
  margin: 20px;
`;

const ContinueShopping = styled.div`
  font-size: 12;
  color: blue;
  margin: 20px;
`;

const Image = styled.img`
  width: 80%;
`;

const Thanks = props => {
  return (
    <Content>
      <Title>Thank You</Title>
      <OrderInfo>
        {"Your order P" +
          props.nOrden.padStart(4, "0") +
          " has been registered"}
      </OrderInfo>
      <StyledLink to="/">
        <ContinueShopping>Continue Shopping</ContinueShopping>
      </StyledLink>
      <Image src="https://1ivu6q1gqh2kndjc23ryof11v5-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/UPS_truck_padded_medium.png" />
    </Content>
  );
};

export default Thanks;

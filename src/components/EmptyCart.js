import React from "react";
import styled from "styled-components";

const Img = styled.img`
padding:3px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Empty = styled.div`
  font-size: 24px;
`;

const Description = styled.div`
  font-size: 16px;
`;

const EmptyCart = () => {
  return (
    <Container>
      <Img src="https://www.savagechefkitchen.com/assets/images/emptycart.png" />
      <Empty>Your cart is empty</Empty>
      <Description>Seems like you haven't chosen</Description>
      <Description>what to buy...</Description>
    </Container>
  );
};

export default EmptyCart;

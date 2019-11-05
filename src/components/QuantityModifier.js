import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 90%;
  background: rgb(255, 128, 0);
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  align-items: center;
  height: 40px;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  font-size: 16px;
  color: white;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  :disabled {
    background-color: #ccc;
    opacity: 0.4;
  }
`;

const Section = styled.div`
    width:40px;
    text-align:center;
    ${props => props.quantity && "cursor:default"};
`;


const QuantityModifier = (props) => {
    const {quantity, addItem, substractFromItem} = props;
  return <Box>
      <Section>-</Section>
      <Section quantity>{quantity}</Section>
      <Section onClick={addItem}>+</Section>
  </Box>;
};

export default QuantityModifier;
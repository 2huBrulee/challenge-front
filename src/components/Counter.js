import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 50%;
  border-width: 0px;
  background: rgb(255, 128, 0);
  cursor: pointer;
  display: inline-flex;
  -webkit-box-align: center;
  height: 48px;
  width: 48px;
  font-style: white;
  color: white;
  font-weight: 180;
  line-height: 24px;
  font-family: "Open Sans", sans-serif;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  padding: 0px;
  border-image: initial;
  ${props => props.quantity>0? "font-size: 18px;":"font-size: 32px;"};
`;

const Counter = props => {
  const { quantity,changeModifierVisibility } = props;
  return <Button onClick={changeModifierVisibility} quantity={quantity}>{quantity === 0 ? "+" : quantity}</Button>;
};

export default Counter;

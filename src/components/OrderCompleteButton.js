import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 90%;
  flex-direction: column;
  background: rgb(255, 128, 0);
  border-width:inherit;
  border-style: solid;
  border-color: #ccc;
  border-radius: 0px;
  border-radius: 3px;
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
    border-width:1px;
    cursor:default;
    background-color: #f6f8fa;
    color: #ccc;
    opacity: 0.4;
  }
`;

const OrderCompleteButton = props => {
  const { createNewOrder, disabled } = props;
  return (
    <Button disabled={disabled} onClick={createNewOrder}>
      COMPLETE ORDER
    </Button>
  );
};

export default OrderCompleteButton;

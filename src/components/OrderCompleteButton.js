import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 90%;
  flex-direction: column;
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

const OrderCompleteButton = props => {
  const { createNewOrder, disabled } = props;
  return (
    <Button disabled={disabled} onClick={createNewOrder}>
      COMPLETE ORDER
    </Button>
  );
};

export default OrderCompleteButton;

import React from "react";
import styled from "styled-components";
import Counter from "./Counter";
import QuantityModifier from "./QuantityModifier";

const Container = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
  flex-direction: column;
  align-items: center;
`;

const Delete = styled.div`
  font-size: 12px;
  cursor: pointer;
`;

const ItemQuantity = props => {
  const {
    changeModifierVisibility,
    addItem,
    quantity,
    deleteItem,
    substractFromItem,
    quantityVisibility
  } = props;

  return (
    <Container>
      {quantityVisibility ? (
        <QuantityModifier
          addItem={addItem}
          quantity={quantity}
          substractFromItem={substractFromItem}
        />
      ) : (
        <Counter
          changeModifierVisibility={changeModifierVisibility}
          quantity={quantity}
        />
      )}
      <Delete onClick={e => console.log("clicky")}>delete</Delete>
    </Container>
  );
};

export default ItemQuantity;

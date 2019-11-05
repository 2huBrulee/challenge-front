import React, { useState } from "react";
import styled from "styled-components";
import ItemQuantity from "./ItemQuantity";

const Item = styled.div`
  height: 80px;
  width: 100%;
  padding: 3px;
  display: flex;
`;

const Img = styled.img`
  height: 100%;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 3px;
`;

const Name = styled.div`
  user-select: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  font-family: "Open Sans", sans-serif;
  color: rgb(51, 51, 51);
  text-decoration: none;
  transition: color 0.2s ease-in-out 0s;
`;

const Details = styled.div`
  color: rgb(51, 51, 51);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  font-family: "Open Sans", sans-serif;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Price = styled.div`
  color: rgb(255, 45, 85);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  font-family: "Open Sans", sans-serif;
`;
const Container = styled.div`
  border-top-width: thin;
  display: flex;
  position: relative;
  padding: 12px;
  margin: 0px;
`;
const Shade = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 100%;
  ${props => !props.isVisible && "visibility:hidden"};
`;

const CartItem = props => {
  const {
    name,
    unitPrice,
    id,
    description,
    addItemToCart,
    substract,
    deleteFromCart
  } = props;

  const quantity = props.cartItems
    ? props.cartItems.reduce(
        (quantity, cartItem) =>
          cartItem.id === id ? quantity + cartItem.quantity : quantity + 0,
        0
      )
    : 0;

  const [quantityModifierVisibility, setQuantityModifierVisibility] = useState(
    false
  );

  const changeModifierVisibility = () =>
    setQuantityModifierVisibility(!quantityModifierVisibility);

  const addItem = e =>
    addItemToCart({ name, unitPrice, description, id, quantity: quantity + 1 });

  const substractOne = e => {
    if (!substract(id)) changeModifierVisibility();
  };

  const deleteItem = e => deleteFromCart(id);

  return (
    <Container>
      <Item>
        <Img src="https://pilandina.com.bo/wp-content/uploads/2019/06/Yogurt-Bebible-Light-sabor-frutilla-1kg-600x600.jpg" />
        <Product>
          <Name>{name}</Name>
          <Details>{description}</Details>
          <Price>{"S/. " + unitPrice}</Price>
        </Product>
      </Item>
      <Shade
        onClick={changeModifierVisibility}
        isVisible={quantityModifierVisibility}
      />
      <ItemQuantity
        quantityVisibility={quantityModifierVisibility}
        addItem={addItem}
        changeModifierVisibility={changeModifierVisibility}
        quantity={quantity}
        substract={substractOne}
        deleteItem={deleteItem}
      />
    </Container>
  );
};

export default CartItem;

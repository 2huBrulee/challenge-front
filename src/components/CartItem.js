import React from 'react'
import styled from 'styled-components';
import Counter from './Counter';

const Item= styled.div`
    height:70px;
    width:100%;
    padding:3px;
    display:flex;
`;

const Img = styled.img`
    height:100%;
`;

const Product = styled.div`
    display:flex;
    flex-direction:column;
    flex-grow:1;
    padding:3px;
`;

const Name = styled.div`

`;

const Details = styled.div`

`;

const Price = styled.div`

`;



const CartItem = (props) => {
    const { name, unitPrice,id,description, setCartItems} = props;
    return (
        <Item>
            <Img src='https://pilandina.com.bo/wp-content/uploads/2019/06/Yogurt-Bebible-Light-sabor-frutilla-1kg-600x600.jpg'/>
            <Product>
                <Name>{name}</Name>
                <Details>{description}</Details>
                <Price>{'S/. '+unitPrice}</Price>
            </Product>
            <Counter setCartItems={setCartItems}/>
        </Item>
    )
}

export default CartItem

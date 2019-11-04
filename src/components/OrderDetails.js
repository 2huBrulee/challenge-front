import React from 'react'
import styled from "styled-components";
import OrderDetailLine from './OrderDetailLine';

const Container = styled.div`
    background-color:#ffffff;
    padding:12px 20px;
    margin: 15px;
`;

const getValues = totalPrice => {
    const productPrice = (totalPrice)*100/118.0;
    return {
        productPrice : productPrice.toFixed(2),
        taxes:(totalPrice-productPrice).toFixed(2),
        shipping: (totalPrice/10.0).toFixed(2),
        total: (totalPrice*1.1).toFixed(2),
    }
}

const OrderDetails = (props) => {
    const { productPrice, taxes, shipping,total }= getValues(props.totalPrice);

    return (
        <Container>
            <OrderDetailLine Products label='Products' value={'$ '+productPrice}/>
            <OrderDetailLine Shipping label='Shipping Cost' value={'$ '+shipping}/>
            <OrderDetailLine Taxes label='Taxes' value={'$ '+taxes}/>
            <OrderDetailLine Total label='Total' value={'$ '+total}/>
        </Container>
    )
}

export default OrderDetails

import React from 'react'
import ShippingInfo from './ShippingInfo';
import OrderDetails from './OrderDetails';
import OrderCompleteButton from './OrderCompleteButton';
import styled from 'styled-components';

const Container = styled.div`
    margin-top:80px;
`;

const OrderInfo = props => {
    const { createNewOrder,totalPrice} = props;
    return (
        <Container>
            <ShippingInfo/>
            <OrderDetails totalPrice={totalPrice}/>
            <OrderCompleteButton disabled={totalPrice*1.1<50} createNewOrder={createNewOrder}/>
        </Container>
    )
}



export default OrderInfo

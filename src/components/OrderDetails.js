import React from 'react'
import styled from "styled-components";
import OrderDetailLine from './OrderDetailLine';

const Container = styled.div`
    background-color:#ffffff;
    border-radius:5%;
    padding:10px;
`;

const OrderDetails = () => {
    return (
        <Container>
            <OrderDetailLine Products label='Products' value='$10'/>
            <OrderDetailLine Shipping label='Shipping Cost' value='$10'/>
            <OrderDetailLine Taxes label='Taxes' value='$10'/>
            <OrderDetailLine Total label='Total' value='$10'/>
        </Container>
    )
}

export default OrderDetails

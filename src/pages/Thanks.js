import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Content = styled.div`
    margin:auto;
    width:50%;
    text-align:center;
`;

const Title = styled.div`
    font-size:16;
`;

const OrderInfo = styled.div`
    font-size:12;
`;

const ContinueShopping = styled.div`
    font-size:12;
    background-color: blue;
`;

const Image = styled.img`
    width:100%;
`;


const Thanks = props => {
    return (
        <Content>
            <Title>Thank You</Title>
            <OrderInfo>{'Your order P'+ props.nOrden.padStart(4,'0') +' has been registered'}</OrderInfo>
            <ContinueShopping>Continue Shopping</ContinueShopping>
            <Image src='https://1ivu6q1gqh2kndjc23ryof11v5-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/UPS_truck_padded_medium.png'/>
        </Content>
    )
}

Thanks.propTypes = {

}

export default Thanks

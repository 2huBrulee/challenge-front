import React from 'react'
import styled from "styled-components";

const Button= styled.button`
    width:100%;
    background:rgb(255,128,0);
    border-top-left-radius: 3% 10%;
    border-bottom-left-radius: 3% 10%;
    border-bottom-right-radius: 3% 10%;
    border-top-right-radius: 3% 10%;
    border:0px;
    height:40px;
`;

const OrderCompleteButton = () => {
    return (
        <Button>
            COMPLETE ORDER
        </Button>
    )
}

export default OrderCompleteButton

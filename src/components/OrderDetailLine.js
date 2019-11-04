import React from 'react';
import styled from "styled-components";

const LeftSideText = styled.span`
    float:left;
`;

const RightSideText = styled.span`
    float:right;
`;

const Line = styled.div`
    width:100%;
    display: inline-block;
    background-color: ${props=> props.Shipping ? 'yellow': '#ffffff'};
    ${props=>props.Total && 'font-weight: bold'};
`;

const OrderDetailLine = (props) => {
    return (
        <Line {...props}>
            <LeftSideText>{props.label}</LeftSideText>
            <RightSideText>{props.value}</RightSideText>
        </Line>
    )
}

export default OrderDetailLine;

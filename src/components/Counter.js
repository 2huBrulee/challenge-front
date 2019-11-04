import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    border-radius:50%;
    background:rgb(255,128,0);
    height: 50px;
    width: 50px;
    font-style: white;
    cursor:pointer;
`;

const Counter = props => {
    const { quantity,onClick} =props;
    return (
        <Button onClick={onClick}>{quantity===0?'+':quantity}</Button>
    )
}

Counter.propTypes = {

}

export default Counter

import React from 'react'
import PropTypes from 'prop-types'
import ShippingInfo from './ShippingInfo';
import OrderDetails from './OrderDetails';
import OrderCompleteButton from './OrderCompleteButton';

const OrderInfo = props => {
    const { createNewOrder,totalPrice} = props;
    return (
        <div>
            <ShippingInfo/>
            <OrderDetails totalPrice={totalPrice}/>
            <OrderCompleteButton disabled={totalPrice<50} createNewOrder={createNewOrder}/>
        </div>
    )
}

OrderInfo.propTypes = {

}

export default OrderInfo

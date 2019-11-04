import React from 'react'
import PropTypes from 'prop-types'
import ShippingInfo from './ShippingInfo';
import OrderDetails from './OrderDetails';
import OrderCompleteButton from './OrderCompleteButton';

const OrderInfo = props => {
    return (
        <div>
            <ShippingInfo/>
            <OrderDetails/>
            <OrderCompleteButton/>
        </div>
    )
}

OrderInfo.propTypes = {

}

export default OrderInfo

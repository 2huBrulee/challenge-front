import React from "react";
import styled from "styled-components";
import moment from 'moment';

const Img = styled.img`
  height: 1em;
`;

const ShippingDate = styled.span`
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const getShippingDay = ()=>{
    const shippingDay = moment().add(5,'days');
    if (shippingDay.isoWeekday()===6)
        shippingDay.add(2,'days');
        if (shippingDay.isoWeekday()===7)
        shippingDay.add(1,'days');
    return shippingDay.format('DD/MM/YYYY')
    }

const ShippingInfo = props => {
  return (
    <div>
      <ShippingDate>
        <Img src="https://www.tatamotors.com/wp-content/uploads/2019/05/29092741/intra.jpg" />
        {'Buy now and get it by ' + getShippingDay()}
      </ShippingDate>
    </div>
  );
};

export default ShippingInfo;

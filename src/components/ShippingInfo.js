import React from "react";
import styled from "styled-components";


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


const ShippingInfo = props => {
  return (
    <div>
      <ShippingDate>
        <Img src="https://www.tatamotors.com/wp-content/uploads/2019/05/29092741/intra.jpg" />
        Buy now and get it by 5/3/21
      </ShippingDate>
    </div>
  );
};

export default ShippingInfo;

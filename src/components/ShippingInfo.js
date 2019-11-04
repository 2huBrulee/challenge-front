import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Img = styled.img`
  height: 1em;
  display: inline;
`;

const ShippingDate = styled.span`
  font-weight: bold;
`;

const ShippingInfo = props => {
  return (
    <div>
      <Img src="https://www.tatamotors.com/wp-content/uploads/2019/05/29092741/intra.jpg" />
      Buy now and get it by <ShippingDate> 5/3/21</ShippingDate>
    </div>
  );
};

ShippingInfo.propTypes = {};

export default ShippingInfo;

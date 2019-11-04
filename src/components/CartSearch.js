 import React,{useState} from 'react'
 import ProductSearch from './ProductSearch';
 import Cart from './Cart';
 import styled from 'styled-components';

 const Section = styled.div`
    width:100%;
    padding:0px;
    margin:0px;
    align-content:center;
 `;
 
 const CartSearch = (props) => {
    const {products, cartItems, setCartItems} = props;
    const [search, setSearch] = useState([]);
     return (
         <div>
             <ProductSearch products={products} setSearch={setSearch} />
             <Cart cartItems={cartItems} setCartItems={setCartItems} search={search}/>
         </div>
     )
 }
 
 export default CartSearch
 
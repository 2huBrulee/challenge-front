import React from "react";
import styled from "styled-components";

const Search = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  transition: border 0.2s ease-in-out 0s;
  outline: none;

`;

const onChange = (suggestions, setSearch) => e => {
  const userInput = e.currentTarget.value;
  if (userInput === "") setSearch([]);
  else {
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setSearch(filteredSuggestions);
  }
};

const ProductSearch = props => {
  const { setSearch, products } = props;
  return (
    <Search
      placeholder="Search Products"
      onChange={onChange(products, setSearch)}
    />
  );
};

export default ProductSearch;

import React from "react";
import styled from "styled-components";

const Search = styled.input`
  width: 100%;
  padding: 15px 20px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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

import React from "react";
import styled from "styled-components";

const Search = styled.input`
  width: 100%;
  height: 25px;
  border-color: gray;
  border-width: 1px;
  border-top-left-radius: 3% 10%;
  border-bottom-left-radius: 3% 10%;
  border-bottom-right-radius: 3% 10%;
  border-top-right-radius: 3% 10%;
  padding: 5px;
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

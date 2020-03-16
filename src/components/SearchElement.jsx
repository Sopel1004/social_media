import React from 'react';
import { ReactComponent as SearchIcon } from '../images/search.svg';
import StyledDiv from '../styles/SearchElement';

const SearchElement = ({ userID, name }) => {
  return (
    <StyledDiv>
      <SearchIcon />
      <StyledDiv.StyledSpan>{name}</StyledDiv.StyledSpan>
    </StyledDiv>
  );
};

export default SearchElement;

import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Navigation from './Navigation';

const StyledHeader = styled.header`
    width: 100vw;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = () => (
  <StyledHeader>
    <SearchBar />
    <Navigation />
  </StyledHeader>
);

export default Header;

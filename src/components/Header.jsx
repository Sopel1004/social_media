import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Navigation from './Navigation';

const StyledHeader = styled.header`
    width: 100vw;
    height: 20vh;
    background-color: red;
`;

const Header = () => (
    <StyledHeader>
        <SearchBar />
        <Navigation />
    </StyledHeader>
);

export default Header;

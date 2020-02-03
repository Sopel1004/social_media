import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Navigation from './Navigation';

const StyledHeader = styled.header`
    width: 100vw;
    height: 100px;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    box-shadow: 0 -5px 8px 1px #cccccc;
`;

const Header = () => (
    <StyledHeader>
        <SearchBar />
        <Navigation />
    </StyledHeader>
);

export default Header;

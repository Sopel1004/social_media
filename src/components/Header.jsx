import React from 'react';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
import StyledHeader from '../styles/Header';

const Header = () => (
    <StyledHeader>
        <SearchBar />
        <Navigation />
    </StyledHeader>
);

export default Header;

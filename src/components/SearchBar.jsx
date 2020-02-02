import React from 'react';
import styled from 'styled-components';

const Search = styled.input`
    width: 90%;
    height: 24px;
    padding: 0 5px;
    border: 1px solid #dadada;
    border-radius: 20px;

    &::placeholder {
        text-align: center;
    }
`;

const SearchBar = () => <Search type="text" placeholder="Search..." />;

export default SearchBar;

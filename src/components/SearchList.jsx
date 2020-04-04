import React from 'react';
import List from '../styles/shared/list';
import SearchElement from './SearchElement';
import StyledLink from '../styles/shared/link';

const SearchList = ({ searchResult, closeSearchSection }) => {
  return (
    <List>
      {searchResult
        ? searchResult.map((result) => (
            <List.Element key={result.userId}>
              <StyledLink
                to={`/profile/${result.userId}`}
                onClick={closeSearchSection}
              >
                <SearchElement userID={result.userId} name={result.name} />
              </StyledLink>
            </List.Element>
          ))
        : null}
    </List>
  );
};

export default SearchList;

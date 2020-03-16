import React from 'react';
import Section from '../styles/SearchSection';
import SearchList from './SearchList';
import CloseIcon from '../styles/SearchSection/closeIcon';

const SearchSection = ({ searchResult, closeSearchSection }) => {
  return (
    <Section>
      <CloseIcon onClick={closeSearchSection} />
      <SearchList
        searchResult={searchResult}
        closeSearchSection={closeSearchSection}
      />
    </Section>
  );
};

export default SearchSection;

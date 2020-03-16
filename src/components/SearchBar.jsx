import React, { useState, useEffect } from 'react';
import Form from '../styles/SearchBar';
import SearchSection from './SearchSection';
import firebase from '../config/firebase';

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const getData = async e => {
    e.preventDefault();
    if (inputValue.length) {
      await firebase
        .firestore()
        .collection('users')
        .where('searchTags', 'array-contains-any', [
          ...inputValue.toLowerCase()
        ])
        .get()
        .then(snapshot => {
          const data = snapshot.docs.map(doc => ({
            userId: doc.id,
            name: doc.data().fullName
          }));
          setSearchResult(data);
        });
    }
  };

  const clearSearch = () => {
    setSearchResult(null);
    setIsActive(!isActive);
    setInputValue('');
  };

  return (
    <Form onSubmit={getData}>
      <Form.Search
        aria-label="Search"
        type="text"
        placeholder="Search..."
        value={inputValue}
        onFocus={() => setIsActive(!isActive)}
        onChange={e => setInputValue(e.currentTarget.value)}
        isActive={isActive}
      />
      {isActive && (
        <SearchSection
          searchResult={searchResult}
          closeSearchSection={clearSearch}
          clearResult
        />
      )}
    </Form>
  );
};

export default SearchBar;

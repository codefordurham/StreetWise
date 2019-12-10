import React from 'react';
import Geosuggest from 'react-geosuggest';
import './Search.css';

function Search() {
  return (
    <div className="search-component">
      <h1>Streetwise</h1>
      <Geosuggest />
    </div>
  );
}

export default Search;

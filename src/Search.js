import React from 'react';
import Geosuggest from 'react-geosuggest';
import './Search.css';

function Search(props) {
  return (
    <div className="search-component">
      <h1>Streetwise</h1>
      <Geosuggest
        onSuggestSelect={suggests => {
          props.onLocationChange(suggests);
        }}
      />
    </div>
  );
}

export default Search;

import React from 'react';
import './style.scss';
import Geosuggest from 'react-geosuggest';
import { Link } from 'gatsby';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null
    };
  }

  render() {
    return (
      <section className="section">
        <div className="container">
        <div className="columns is-mobile">
          <div className="column is-3 is-offset-4">
            <Geosuggest
              onSuggestSelect={(suggests) => {
                this.setState({
                  location: suggests.location
                });
              }}
              placeholder='Find address'
              inputClassName='input'/>
          </div>
          <div className="column is-1">
            <Link
              to="/sheet/"
              className="button"
              state={this.state}
            >
              Search
            </Link>
          </div>
        </div>
        </div>
      </section>);
  }
}

export default Search;

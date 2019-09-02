import React from "react";
import "./style.scss";
import Geosuggest from "react-geosuggest";
import { Link } from "gatsby";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-3 is-offset-4">
              <Geosuggest
                onSuggestSelect={suggests => {
                  this.props.onLocationChange(suggests);
                }}
                placeholder="Find address"
                inputClassName="input"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

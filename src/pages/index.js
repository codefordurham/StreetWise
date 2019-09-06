import React from "react";

import axios from 'axios';
import Layout from "../components/layout";
import Search from "../components/search";
import Sheet from "../components/sheet";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
    };
  }

  async handleLocationChange(location) {
    try {
      let info = await axios.get(
        `/.netlify/functions/location?lat=${location.location.lat}&lng=${location.location.lng}`,
        { responseType: 'json' }
      );
      this.setState({
        location: info.data,
        address: location.description
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state.location) {
      return (
        <Layout>
          <Search
            onLocationChange={this.handleLocationChange.bind(this)}
          />
        </Layout>
      );
    }
    return (
      <Layout>
        <Search
          onLocationChange={this.handleLocationChange.bind(this)}
        />
        <Sheet
          address={this.state.address}
          location={this.state.location}
        />
      </Layout>
    );
  }
}

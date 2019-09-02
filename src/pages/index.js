import React from "react";

import LocationService from "../services/location_service";
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
      // let info = await LocationService.lookup(location.lat, location.lng);
      let info = await LocationService.lookup(36.0117441, -78.93635990000001);
      this.setState({
        location: info,
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

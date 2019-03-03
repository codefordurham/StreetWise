import React from 'react';
import './style.scss';
import { geolocated, geoPropTypes } from 'react-geolocated';
import Garbage from './garbage';

class Location extends React.Component {
  render() {
    if (!this.props.isGeolocationAvailable) {
      return (
        <div className="location">
          <p>No geolocation available! At some point we will support the ability
            for you to add your address.</p>
        </div>
      );
    }

    if (!this.props.coords) {
      return (
        <div className="location">
          <p>Please write: fetching location...</p>
        </div>
      );
    }

    return (
      <div className="location">
        <Garbage lat={this.props.coords.latitude} long={this.props.coords.longitude}/>
      </div>
    );
  }
}

// Get eslint not to complain about geolocation fields
Location.propTypes = {...Location.propTypes, ...geoPropTypes};

export default geolocated({
  positionOptions: {
    enableHighAccurace: false
  },
  userDecisionTimeout: 5000
})(Location);

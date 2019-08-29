import React from 'react';
import './style.scss';
import { geolocated, geoPropTypes } from 'react-geolocated';
import Garbage from './garbage';
import { FaSearchLocation } from 'react-icons/fa';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starting: false
    };
  }

  render() {
    if (!this.props.isGeolocationAvailable) {
      return (
        <div className="location">
          <p>No geolocation available! At some point we will support the ability
            for you to search for your address.</p>
        </div>
      );
    }

    if (this.state.starting) {
      return (<div className="button"></div>);
    } else {
      return (
        <a className="button" href="">
          <span className="icon">
            <FaSearchLocation size="48" color="gray" />
          </span>
        </a>);
    }

    // if (!this.props.coords) {
    //   return (
    //     <div className="location">
    //       <p>Fetching location...</p>
    //     </div>
    //   );
    // }
    //
    // return (
    //   <div className="location">
    //     <Garbage lat={this.props.coords.latitude} long={this.props.coords.longitude}/>
    //   </div>
    // );
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

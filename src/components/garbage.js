import React from 'react';
import './garbage.scss';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FaTruck, FaTrash, FaRecycle, FaPagelines } from 'react-icons/fa';

export default class Garbage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isError: false,
      error: '',
      trashDay: '',
      yardDay: '',
      recycleDay: '',
    };
  }

  componentDidMount() {
    fetch(`https://gisweb2.durhamnc.gov/arcgis/rest/services/DurhamMaps/SolidWaste/MapServer/2/query?f=json&geometry=${this.props.long},${this.props.lat}&returnGeometry=false&outFields=*&outSR=4326&geometryType=esriGeometryPoint&inSR=4326`)
      .then(response => response.json())
      .then(
        (result) => {
          const cleanAttribute = (name) => result.features[0].attributes[name].replace(/^.*: ?/,'')
          this.setState({
            isLoaded: true,
            trashDay: result.features.length > 0 ? cleanAttribute('SW_DAY') : '',
            yardDay: result.features.length > 0 ? cleanAttribute('YW_DAY') : '',
            recycleDay: result.features.length > 0 ? cleanAttribute('REC_DAY') : '',
          });
        },
        (error) => {
          this.setState({
            isError: true,
            error
          });
        }
      )
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div className="garbage">
          I found your location, now I am going to look up your garbage pickup schedule...
        </div>
      );
    }
    if (this.state.isError) {
      return (
        <div className="garbage">
          Encountered some trouble finding your pickup day: {this.state.error}
        </div>
      );
    }

    return (
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">Pickup Days</div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="icon is-large media-left">
              <FaTrash size="32" color="gray" />
            </div>
            <div className="media-content">
              <p className="title is-4">Trash</p>
              <p className="subtitle is-6">{this.state.trashDay}</p>
            </div>
          </div>
          <div className="media">
            <div className="icon is-large media-left">
              <FaRecycle size="32" color="darkblue" />
            </div>
            <div className="media-content">
              <p className="title is-4">Recycling</p>
              <p className="subtitle is-6">{this.state.recycleDay}</p>
            </div>
          </div>
          <div className="media">
            <div className="icon is-large media-left">
              <FaPagelines size="32" color="brown" />
            </div>
            <div className="media-content">
              <p className="title is-4">Yard Waste</p>
              <p className="subtitle is-6">{this.state.yardDay}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Garbage.propTypes = {
  lat: PropTypes.number,
  long: PropTypes.number
}

import * as d3 from 'd3';
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
    d3.json('data/trash.geojson')
      .then(
        (result) => {
          const matches = result.features.filter((d) => d3.geoContains(d, [this.props.long, this.props.lat]));
          if (matches.length === 0) {
            this.setState({
              isError: true,
              error: 'Could not find ward for your location',
            });
          } else {
            const match = matches[0];
            const cleanAttribute = (name) => match.properties[name].replace(/^.*: ?/,'')
            this.setState({
              isLoaded: true,
              trashDay: cleanAttribute('SW_DAY'),
              yardDay: cleanAttribute('YW_DAY'),
              recycleDay: cleanAttribute('REC_DAY'),
            });
          }
        },
        (error) => {
          console.log("|error = "+ error);
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

import Layout from "../components/layout";
import React from "react";
import PropTypes from "prop-types";
import { FaHome, FaShieldAlt, FaBalanceScale } from 'react-icons/fa';
import { get } from 'lodash/get';

export default class Sheet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="level">
          <div className="level-item has-text-centered">
            <div className="icon is-large media-left">
              <FaHome size="32" color="gray" />
            </div>
            <p className="title">
              1234 Main St
            </p>
          </div>
        </nav>
        <div className="columns">
          <div className="column">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <td><strong>Electric</strong></td>
                  <td>Duke Energy</td>
                  <td>(800)777-9898</td>
                </tr>
                <tr>
                  <td><strong>Water</strong></td>
                  <td>Durham City Water</td>
                  <td>(919)560-1200</td>
                </tr>
                <tr>
                  <td><strong>Gas</strong></td>
                  <td>Dominion</td>
                  <td>(877)776-2427</td>
                </tr>
                <tr>
                  <td><strong>Internet</strong></td>
                  <td>AT&T</td>
                  <td></td>
                </tr>
                <tr>
                  <td><strong>TV</strong></td>
                  <td>Spectrum</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column">
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <td><strong>Trash</strong></td>
                  <td>{this.props.location.trash.trashDay}</td>
                </tr>
                <tr>
                  <td><strong>Recycling</strong></td>
                  <td>{this.props.location.trash.recycleDay}</td>
                </tr>
                <tr>
                  <td><strong>Nearest Park</strong></td>
                  <td></td>
                </tr>
                <tr>
                  <td><strong>Nearest Libraries</strong></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <nav className="level">
              <div className="level-item has-text-centered">
                <div className="icon is-large media-left">
                  <FaShieldAlt size="32" color="gray" />
                </div>
                <p className="title">
                  Health &amp; Safety
                </p>
              </div>
            </nav>
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column">
            <nav className="level">
              <div className="level-item has-text-centered">
                <div className="icon is-large media-left">
                  <FaBalanceScale size="32" color="gray" />
                </div>
                <p className="title">
                  Government
                </p>
              </div>
            </nav>
            <table className="table is-fullwidth">
              <tbody>
                <tr>
                  <td><strong>Ward</strong></td>
                  <td>{this.props.location.ward.ward}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Sheet.propTypes = {
  location: PropTypes.object
}

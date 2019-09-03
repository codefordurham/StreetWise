import axios from 'axios';

import * as d3 from "d3";

class TrashService {
  static async lookup(lat, lng) {
    return d3.json("/data/trash.geojson").then(result => {
      const matches = result.features.filter(d =>
        d3.geoContains(d, [lng, lat])
      );
      if (matches.length === 0) {
        return {
          error: 'Could not find ward for your location',
        };
      }
      const match = matches[0];
      const cleanAttribute = (name) => match.properties[name].replace(/^.*: ?/,'')
      return {
        trashDay: cleanAttribute('SW_DAY'),
        yardDay: cleanAttribute('YW_DAY'),
        recycleDay: cleanAttribute('REC_DAY'),
      };
    });
  }
}

class WardService {
  static async lookup(lat, lng) {
    return d3.json("/data/wards.geojson").then(result => {
      const matches = result.features.filter(d =>
        d3.geoContains(d, [lng, lat])
      );
      if (matches.length === 0) {
        return {
          error: 'Could not find ward for your location',
        };
      }
      const match = matches[0];
      return {
        ward: match.properties['Ward'],
        wardRepresentative: match.properties['WardRep'],
      };
    });
  }
}

class LocationService {
  static async lookup(lat, lng) {
    return Promise.all([
      TrashService.lookup(lat, lng),
      WardService.lookup(lat, lng),
    ]).then((services) => {
      let [trash, ward] = services;
      return {
        trash,
        ward,
      }
    });
  }
}

export function handler(event, context, callback) {
  // LocationService.lookup(location.location.lat, location.location.lng)
  LocationService.lookup(36.0117441, -78.93635990000001)
    .then((info) => {
      callback(null, {
        statusCode: 200,
        body: info
      });
    });
}

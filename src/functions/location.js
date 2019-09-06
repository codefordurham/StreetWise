import * as d3 from "d3";
import { readFileSync } from 'fs';

const TRASH_JSON = require('./data/trash.geojson');
class TrashService {
  static lookup(lat, lng) {
    const matches = JSON.parse(TRASH_JSON).features.filter(d =>
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
  }
}

const WARDS_JSON = require('./data/wards.geojson');
class WardService {
  static lookup(lat, lng) {
    const matches = JSON.parse(WARDS_JSON).features.filter(d =>
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
  }
}

class LocationService {
  static lookup(lat, lng) {
    return {
      trash: TrashService.lookup(lat, lng),
      ward: WardService.lookup(lat, lng),
    };
  }
}

export function handler(event, context, callback) {
  if (!('lat' in event.queryStringParameters) || !('lng' in event.queryStringParameters)) {
    return callback(null, {
      statusCode: 422,
      body: '',
    });
  }

  const LAT = parseFloat(event.queryStringParameters['lat']);
  const LNG = parseFloat(event.queryStringParameters['lng']);

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(LocationService.lookup(LAT, LNG)),
  });
}

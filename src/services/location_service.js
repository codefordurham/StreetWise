import * as d3 from "d3";

class NeighborhoodService {
  static async lookup(lat, lng) {
    return d3.json("/data/durham-hoods.geojson").then(result => {
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
        name: match.properties.name,
      };
    });
  }
}


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

export default class LocationService {
  static async lookup(lat, lng) {
    return Promise.all([
      TrashService.lookup(lat, lng),
      WardService.lookup(lat, lng),
      NeighborhoodService.lookup(lat, lng),
    ]).then((services) => {
      let [trash, ward, neighborhood] = services;
      return {
        trash,
        ward,
        neighborhood,
      }
    });
  }
}

import * as d3 from "d3";

export default class LocationService {
  static async lookup(lat, lng) {
    return d3.json("/data/trash.geojson").then(result => {
      const matches = result.features.filter(d =>
        d3.geoContains(d, [lng, lat])
      );
      if (matches.length === 0) {
        return {
          isLoaded: true,
          isError: true,
          error: 'Could not find ward for your location',
        };
      }
      const match = matches[0];
      const cleanAttribute = (name) => match.properties[name].replace(/^.*: ?/,'')
      return {
        isLoaded: true,
        isError: false,
        trashDay: cleanAttribute('SW_DAY'),
        yardDay: cleanAttribute('YW_DAY'),
        recycleDay: cleanAttribute('REC_DAY'),
      };
    });
  }
}

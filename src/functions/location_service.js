import axios from 'axios';

export default function(event, context, callback) {
  // let info = await LocationService.lookup(location.location.lat, location.location.lng);
  callback(null, {
    statusCode: 200,
    body: "Hello, world!"
  });
}

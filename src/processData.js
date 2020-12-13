import {showMap} from './showMap';
import {showData} from './showData';

export function processData(data, when) {
  //If we're in the USA then convert region to two letters
  let region = data.location.region;
  if(data.location.country === 'US') {
    region = 'CA';
  }
  //console.log(data);
  //console.log(data.ip);
  //console.log(data.location.city, region, data.location.postalCode)
  //console.log('UTC ' + data.location.timezone);
  //console.log(data.isp);
  //console.log(data.location.lat, data.location.lng);
  const place = [data.location.city, region, data.location.postalCode];
  const timezone = `UTC ${data.location.timezone}`;
  const isp = data.isp;
  showData(data.ip, place, timezone, isp);
  showMap(data.location.lat, data.location.lng, when);
}
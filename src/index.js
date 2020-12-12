import './styles.scss';
import {getData} from './getData';
import {showMap} from './showMap';
import {showData} from './showData';

//const ip = '8.8.8.8';
const ip = '';

//TODO commented out to stop it doing API requests when I'm doing other things
getData(ip)
  //.then(data => console.log(data));
  .then(data => {
    processData(data);
  });

function processData(data) {
  //If we're in the USA then convert region to two letters
  let region = data.location.region;
  if(data.location.country === 'US') {
    region = 'CA';
  }
  console.log(data.ip);
  console.log(data.location.city, region, data.location.postalCode)
  console.log('UTC ' + data.location.timezone);
  console.log(data.isp);
  console.log(data.location.lat, data.location.lng);
  const place = [data.location.city, region, data.location.postalCode];
  const timezone = `UTC ${data.location.timezone}`;
  const isp = data.isp;
  showData(data.ip, place, timezone, isp);
  showMap(data.location.lat, data.location.lng);
}

//TODO comment out
//To test if not using the API
//showData('192.212.174.101', ['Brooklyn','NY','10001'], 'UTC -05:00', 'SpaceX Starlink');
//showMap(52.374990, -1.556640);
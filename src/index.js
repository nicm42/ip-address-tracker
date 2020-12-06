import './styles.scss';
import {getData} from './getData';

const ip = '8.8.8.8';

getData(ip)
  //.then(data => console.log(data));
  .then(data => {
    console.log(data.ip);
    //console.log(data.location.city, data.location.region, data.location.postalCode, data.location.country);
    //If we're in the USA then convert region to two letters
    let region = data.location.region;
    if(data.location.country === 'US') {
      region = 'CA';
    }
    console.log(data.location.city, region, data.location.postalCode)
    console.log('UTC ' + data.location.timezone);
    console.log(data.isp);
  });


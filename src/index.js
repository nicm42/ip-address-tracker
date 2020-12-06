import './styles.scss';
import {getData} from './getData';

const ip = '8.8.8.8';

getData(ip)
  //.then(data => console.log(data));
  .then(data => {
    console.log(data.ip);
    console.log(data.location.city, data.location.region, data.location.postalCode, data.location.country);
    console.log(data.location.timezone);
    console.log(data.isp);
  })
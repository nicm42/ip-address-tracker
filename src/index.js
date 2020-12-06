import './styles.scss';
import { config } from "./config";

const ip = '8.8.8.8';
const myKey = config.myKey;

async function getData(ip) {
  try {
    const request = await fetch('https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey + '&ipAddress=' + ip);
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error); //TODO something with the error
  }
}

getData(ip)
  //.then(data => console.log(data));
  .then(data => {
    console.log(data.ip);
    console.log(data.location.city, data.location.region, data.location.postalCode);
    console.log(data.location.timezone);
    console.log(data.isp);
  })
import './styles.scss';
import { config } from "./config";

const ip = '8.8.8.8';
const myKey = config.myKey;

async function getData(ip) {
  const request = await fetch('https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey + '&ipAddress=' + ip);
  const data = await request.json();
  return data;
}

getData(ip)
  .then(data => console.log(data));
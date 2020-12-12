import { config } from "./config";
const myKey = config.myKey;

export async function getData(ip) {
  console.log(ip);
  try {
    const request = await fetch('https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey + '&ipAddress=' + ip);
    //const request = await fetch('https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey);
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error); //TODO something with the error
  }
}

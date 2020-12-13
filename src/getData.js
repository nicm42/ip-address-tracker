import { config } from "./config";
const myKey = config.myKey;

export async function getData(ip) {
  console.log(ip);
  try {
    const link = 'https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey + '&ipAddress=' + ip;
    //console.log(link);
    const request = await fetch(link);
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error); //TODO something with the error
  }
}

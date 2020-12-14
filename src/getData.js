import { config } from "./config";
const myKey = config.myKey;

export async function getData(ip, domain) {
  //console.log(ip);
  try {
    //const api = 'https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey;
    //const link = 'https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey + '&ipAddress=' + ip;
    const link = 'https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey + '&ipAddress=' + ip + '&domain=' + domain;
    /* const link;
    if(ip) {
      link = api + '&ipAddress=' + ip;
    }
    if(domain) {
      link = api + '&domain=' + domain;
    } */
    console.log(link);
    const request = await fetch(link);
    const data = await request.json();
    return data;
  } catch (error) {
    console.log(error); //TODO something with the error
  }
}

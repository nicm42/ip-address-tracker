import { config } from "./config";
const myKey = config.myKey;
//const myKey = 'test';

export async function getData(ip, domain) {
  //console.log(ip);
  try {
    const link = 'https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey + '&ipAddress=' + ip + '&domain=' + domain;
    console.log(link);
    const request = await fetch(link);
    console.log(request)
    if(request.ok) {
      const data = await request.json();
      console.log(data);
      return data;
    } else {
      throw new Error(request.statusText);
    }
  } catch (error) {
    console.log(error); //TODO add error text to page somewhere
  }
}

import { config } from "./config";
const myKey = config.myKey;
//const myKey = 'test';

export async function getData(ip, domain) {
  //console.log(ip);
  try {
    const link = 'https://geo.ipify.org/api/v1?' + 'apiKey=' + myKey + '&ipAddress=' + ip + '&domain=' + domain;
    //console.log(link);
    const request = await fetch(link);
    //console.log(request)
    if(request.ok) {
      const data = await request.json();
      //console.log(data);
      return data;
    } else {
      let errorToSend = request.statusText;
      if(request.status === 422) {
        //The other status texts are pretty self-explanatory, but not this one
        errorToSend = 'The IP address or domain does not exist.';
      }
      throw new Error(errorToSend);
    }
  } catch (error) {
    //console.log(error);
    const errorMessage = document.querySelector('.error')
    errorMessage.innerHTML = error;
    errorMessage.style.display = 'block';
    const resultData = document.querySelectorAll('.result__data');
    resultData.forEach(result => result.innerHTML = '');
  }
}

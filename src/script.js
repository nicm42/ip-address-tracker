const myKey = config.myKey;
const ip = '8.8.8.8';

async function getData(ip) {
  const request = await fetch('https://geo.ipify.org/api/v1' + 'apiKey=' + myKey + '&ipAddress=' + ip);
  const data = await request.jason();
  return data;
}

getData(ip)
  .then(data => console.log(data));
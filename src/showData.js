const addressData = document.getElementById('addressData');
const locationData = document.getElementById('locationData');
const timezoneData = document.getElementById('timezoneData');
const ispData = document.getElementById('ispData');

export function showData(ip, location, timezone, isp) {
  addressData.innerHTML = ip;
  locationData.innerHTML = `${location[0]}, ${location[1]} ${location[2]}`;
  timezoneData.innerHTML = timezone;
  ispData.innerHTML = isp;
}
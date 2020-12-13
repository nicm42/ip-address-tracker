import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

//L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';
/* This code is needed to properly load the images in the Leaflet CSS */
/* delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
}); */

const map = L.map('map');

const mapIcon = L.icon({
  iconUrl: '/images/icon-location.svg'
})

//let marker = L.marker;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

console.log('adding map')

export function showMap(lat, lng, when) {
  console.log(map);
  console.log(lat, lng);
  map.setView([lat, lng], 13);
  //L.marker([lat, lng], {icon: mapIcon}).addTo(map);
}

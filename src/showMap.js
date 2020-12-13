import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerImage from "./images/icon-location.svg";

//L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';
/* This code is needed to properly load the images in the Leaflet CSS */
/* delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
}); */

const map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const mapIcon = L.icon({
  iconUrl: markerImage
})

const marker = L.marker([0, 0], {icon: mapIcon}).addTo(map);

map.zoomControl.setPosition('bottomleft');

console.log('adding map')

export function showMap(lat, lng, when) {
  console.log(map);
  console.log(lat, lng);
  map.setView([lat, lng], 13);
  marker.setLatLng([lat, lng]);
  //L.marker([lat, lng], {icon: mapIcon}).addTo(map);
}

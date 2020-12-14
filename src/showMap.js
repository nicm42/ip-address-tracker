import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerImage from "./images/icon-location.svg";

const map = L.map('map');

const OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const mapIcon = L.icon({
  iconUrl: markerImage
})

const marker = L.marker([0, 0], {icon: mapIcon}).addTo(map);

map.zoomControl.setPosition('bottomleft'); //so it's not under the results

console.log('adding map')

export function showMap(lat, lng) {
  //console.log(map);
  //console.log(lat, lng);
  map.setView([lat, lng], 13);
  OpenStreetMap.addTo(map);
  marker.setLatLng([lat, lng]);
}

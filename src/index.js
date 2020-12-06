import './styles.scss';
import {getData} from './getData';
import L from 'leaflet';
L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';
import 'leaflet/dist/leaflet.css';
/* This code is needed to properly load the images in the Leaflet CSS */
 delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

//const ip = '8.8.8.8';
const ip = '';

//TODO commented out to stop it doing API requests when I'm doing other things
/* getData(ip)
  //.then(data => console.log(data));
  .then(data => {
    outputData(data);
  }); */

function outputData(data) {
  console.log(data.ip);
  //If we're in the USA then convert region to two letters
  let region = data.location.region;
  if(data.location.country === 'US') {
    region = 'CA';
  }
  console.log(data.location.city, region, data.location.postalCode)
  console.log('UTC ' + data.location.timezone);
  console.log(data.isp);
  console.log(location.lat, location.lng);
}

const map = L.map('map');
const defaultCenter = [51.505, -0.09];
const defaultZoom = 13;
const basemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});
const marker = L.marker(defaultCenter);

map.setView(defaultCenter, defaultZoom);
basemap.addTo(map);
marker.addTo(map);

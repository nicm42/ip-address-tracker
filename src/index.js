import './styles.scss';
import {findData} from './findData';

let ip = '';
findData(ip);

const search = document.querySelector('.search');
search.addEventListener('submit', function(event) {
  event.preventDefault();
  ip = document.querySelector('.search-input').value;
  //console.log('IP is ' + ip);
  findData(ip);
})


//TODO comment out
//To test if not using the API
//showData('192.212.174.101', ['Brooklyn','NY','10001'], 'UTC -05:00', 'SpaceX Starlink');
//showMap(52.374990, -1.556640);
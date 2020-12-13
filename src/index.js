import './styles.scss';
import {findData} from './findData';

let ip = '';
//findData(ip, 'initial');

const search = document.querySelector('.search');
search.addEventListener('submit', function(event) {
  event.preventDefault();
  ip = document.querySelector('.search-input').value;
  //console.log('IP is ' + ip);
  //findData(ip, 'typed');
})


//TODO comment out
//To test if not using the API
import {showData} from './showData';
import {showMap} from './showMap';

showData('192.212.174.101', ['Brooklyn','NY','10001'], 'UTC -05:00', 'SpaceX Starlink');
showMap(52.374990, -1.556640, 'initial');

showData('0.0.0.0', ['London','England',''], 'UTC +00:00', 'My ISP');
showMap(0, 0, 'typed');
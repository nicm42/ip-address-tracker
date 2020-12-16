import './styles.scss';
import {findData} from './findData';

let ip = '';
let domain = '';
//findData(ip, domain);

const search = document.querySelector('.search');
search.addEventListener('submit', function(event) {
  //In case there was an error before, we'll make sure it's hidden again
  document.querySelector('.error').style.display = 'none';
  event.preventDefault();
  const result = document.querySelector('.search__input').value;
  //If it's in an IP pattern then assume it's an IP address
  //If not, then assume it's a domain name
  const regex = /([0-9]{1,3}\.){3}[0-9]{1,3}$/;
  if(result.match(regex)) {
    ip = result;
    domain = '';
  } else {
    domain = result;

  }
  ////console.log('IP is ' + ip);
  findData(ip, domain);
  //TODO comment out
  //To test if not using the API
  //showData('0.0.0.0', ['London','England',''], 'UTC +00:00', 'My ISP');
  //showMap(-33.868820, 151.209290);
})


//TODO comment out
//To test if not using the API
import {showData} from './showData';
import {showMap} from './showMap';

showData('192.212.174.101', ['Brooklyn','NY','10001'], 'UTC -05:00', 'SpaceX Starlink');
showMap(52.374990, -1.556640);
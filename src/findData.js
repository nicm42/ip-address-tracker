import {getData} from './getData';
import {processData} from './processData';

export function findData(ip, domain) {
  //TODO commented out to stop it doing API requests when I'm doing other things
  getData(ip, domain)
    //.then(data => console.log(data));
    .then(data => {
      //console.log(data);
      processData(data);
    });
  }
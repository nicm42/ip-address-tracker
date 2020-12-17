import {getData} from './getData';
import {processData} from './processData';

export function findData(ip, domain) {
  getData(ip, domain)
    .then(data => {
      if(data) {
        processData(data);
      }
    });
  }
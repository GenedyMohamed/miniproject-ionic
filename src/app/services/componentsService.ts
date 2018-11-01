import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as config from '../../app/config.json';


@Injectable()
export class ComponentsService {

  constructor(public http: Http) {
    console.log('Hello ComponentsProvider Provider');
  }

  getComponents() {
    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      var url = config.server + 'api/v1/components';
      //var url = 'http://localhost:8000/api/v1/components';

      this.http.get(url).map(res => res.json()).subscribe(data => {
        resolve(data);
      },
        err => {
          reject(err);
        });
    });
  }

}

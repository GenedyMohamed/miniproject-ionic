import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import * as config from '../../app/config.json';

@Injectable()
export class UserService {

  constructor(private http: Http, private jwtHelper: JwtHelper) {

  }

  getHomeConetent(token) {
    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      headers1.append('x-access-token', token);
      var url = config.server + 'api/v1/home';

      this.http.get(url, { headers: headers1 }).map(res => res.json()).subscribe(data => {
        resolve(data);
      },
        err => {
          reject(err);
        });
    });
  }

  moreHomeConetent(url, token) {

    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      headers1.append('x-access-token', token);
      var url = config.server + url;
      this.http.get(url, { headers: headers1 }).map(res => res.json()).subscribe(data => {
        resolve(data)
      },
        err => {
          reject(err);
        });

    })
  }
  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      var url = config.server + 'api/v1/login';
      console.log(credentials);
      let body = JSON.stringify(credentials);
      this.http.post(url, credentials).map(res => res.json()).subscribe(data => {
        resolve(data)
      },
        err => {
          reject(err)
        });
    });
}
}

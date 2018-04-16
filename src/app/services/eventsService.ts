import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import * as config from '../../app/config.json';

@Injectable()
export class EventsService {
  constructor(private http: Http, private jwtHelper: JwtHelper) {
    this.http = http;
  }

  getEvents(course_id) {
    return new Promise((resolve, reject) => {
      let headers1 = new Headers();
      headers1.append('Access-Control-Allow-Origin', 'http://localhost:8100');
      var url = config.server + 'api/v1/events/' + course_id;

      this.http.get(url).map(res => res.json()).subscribe(data => {
        resolve(data);
      },
        err => {
          reject(err);
        });
    });
  }
}
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import * as config from '../../app/config.json';

@Injectable()
export class EventsService {
  constructor(private http: Http, private jwtHelper: JwtHelper) {
    this.http = http;
  }
}
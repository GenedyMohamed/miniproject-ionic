import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class QuestionsService {
  constructor(private http:Http,private jwtHelper: JwtHelper) {
    this.http = http;
  }
}
